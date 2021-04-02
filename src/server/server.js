const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const timeunit = require('timeunit');

dotenv.config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

//API keys
const geonameUsername = process.env.GEONAME_USERNAME; 
const weatherbit_api = process.env.WEATHERBIT_API_KEY;
const pixelBayApi = process.env.PIXELBAY_API_KEY;

//Create a server endpoint to send the search query from front end
app.post(`/query`, (req, res) => {
    //extract data from request object
    const location = req.body.destination;
    const date = req.body.date;

    //get days until trip
    const daysToTrip = calculateDays(date);

    //create a response object that will be sent back to the front end
    const clientResponseObject = {
        weather: undefined,
        imageUrl: undefined,
        location: undefined,
        daysToTrip: daysToTrip
    };

    //create the geoname url for first API call
    const geonameUrl = geoNamesUrl(geonameUsername, location);

    //Asynchronous code that calls and proceeds API calls one after another
    //Call the geoname API to get coordinates and country of the place that the user searched for
    fetchData(geonameUrl, 'POST')
        .then((result) => {
           return extractGeonamesData(result); 
        }).then((result) => {
            //save the parsed Geonames results in the response object
            clientResponseObject.location = {
                place: result.location,
                country: result.countryName
            }

            //create url for weather bit api call
            const url = forecastWeatherUrl(result, weatherbit_api);
            
            //promise not returned until the fetchData is complete
            //fetchData returns a promise which is
            //not resolved until a value is returned
            return fetchData(url, 'GET'); //fetch forecast data
        }).then(result => {
            //process the weather bit returned object
            const forecastData = extractWeatherData(result, date);

            //save parsed returned data to the response object
            clientResponseObject.weather = weatherDataForClient(forecastData);

            //fetch the image url for the client using the place name
            //queries with place and county seem to do better
            const query = `${clientResponseObject.location.place}, ${clientResponseObject.location.country}`;
            const url = createPixelbayUrl(query, pixelBayApi);
            return fetchData(url, 'GET');
        }).then(result => {
            //if there are no images for the place name then use just the country name in a new
            //api call
            if (result.total == 0){
                console.log("No result so search using country");
                //do another query
                const url = createPixelbayUrl(clientResponseObject.location.country, pixelBayApi);
                return fetchData(url, 'GET');
            }
            return result;
        }).then((result) => {
            //get image url 
            const imageUrl = result.hits[0].largeImageURL;
            //save image url to the response object
            clientResponseObject.imageUrl = imageUrl;
            //send the response object back to front end
            res.send({
                status:'complete',
                response:clientResponseObject
            });
        }).catch((error) => {
            console.log('There has been an error');
            console.log(error);
            //if there was an error send a error response back to the front end
            //the message will be display to the user on the web page
            res.send({status:'failure', message: "Error retrieving data, please try again"});
        });

});


/**
 * Creates and returns the geoname url for the API call to get location data for the
 * placed name that is searched
 * @param {string} username - the username for the geoname account 
 * @param {string} location - the location that is searched
 * @returns A string representing the api url address
 */
const geoNamesUrl = (username, location) => {
    //create the geoNamesFetchURL
    const base = 'http://api.geonames.org/searchJSON?formatted=true&q=';
    const url = `${base}${location}&maxRows=3&lang=en&username=${username}`;
    return url;
} 

/**
 * Extracts the longitude and latitude data from the returned data from the 
 * geoName api call and saves it in to a object that is returned
 * @param {*} dataObj - The data Object returned from the geoName API call 
 * @returns The longitude and latitude data in a object
 */
const extractGeonamesData = (dataObj) => {
    console.log(dataObj);
    try{
        const long = dataObj.geonames[0].lng;
        const lat = dataObj.geonames[0].lat;
        const location = dataObj.geonames[0].name;
        const countryName = dataObj.geonames[0].countryName;
        return {lat: lat,
                long: long,
                location: location,
                countryName: countryName
            }
    } catch(error){
        throw (error); 
    }
}

/**
 * Extract the correct weather forcast from the returned weather data. If the trip's date is in 16 days
 * or less than return that day's forcast, if it is in more than 16 days time then use the 16th days
 * forecast
 * @param {object} data Returned weather data from API call
 * @param {string} date Date that the trip is scheduled to start
 * @returns The weather data for the date required or if the date is more than 16 days in the future
 * then the weather data for 16 days time
 */
const extractWeatherData = (data, date) => {

    try{
        //use the form on client to ensure a previous date is not selected.
        let weatherData = null;
        //loop through the data and compare dates
        for (dayData of data.data){
            if (dayData.datetime == date){
                console.log('Date Matches!');
                weatherData = dayData;
                break;
            }
        }
        //if the day is beyhond the 16 days of forecast data then send the 16th
        //day forecast
        if (weatherData == null){
            weatherData = data.data[data.data.length - 1];
        }
        return(weatherData);
    } catch (error){
        console.log('Error processing the weather data');
        throw (error);
    }
}

/**
 * Gets the required specific weather forecast data from the full weather forcast
 * data object
 * @param {object} dataObj - representation of the weather forcast for a day 
 * @returns Object with just a selection of weather forcast values
 */
const weatherDataForClient = (dataObj) => {

    try{
        const iconBaseUrl = `https://www.weatherbit.io/static/img/icons/`

        return {
            highTemp: dataObj.high_temp,
            lowTemp: dataObj.low_temp,
            description: dataObj.weather.description,
            iconUrl: `${iconBaseUrl}${dataObj.weather.icon}.png`
        }
    } catch (error){
        console.log('Error parsing weather data for client');
        console.log(error);
        throw (error);
    }

}

/**
 * Creates a url for an API query to the PixelBay service
 * @param {*} query The search term for the image
 * @param {string} apiKey - security key for accessing the API 
 * @returns 
 */
const createPixelbayUrl = (query, apiKey) => {
    try{
        const baseUrl = `https://pixabay.com/api/`;
        const url = `${baseUrl}?key=${apiKey}&q=${query}&image_type=photo`
        return url;
    } catch (error){
        console.log('Error creating pixelBay url');
        console.log(error);
        throw error;
    }

}



/**
 * Make a POST fetch to the provided API call and parse the returned JSON data
 * @param {string} url - Address of the API call  
 * @returns The parse json data of the response
 */
const fetchData = async (url, method) => {
        try{
            const response = await fetch(url, {
                method: method
            });
            const data = await response.json();
            //if there is an error in the response
            //throw an error
            if ('error' in data){
                throw (data['error']);
            }
            return data;
        } catch(error){
            throw (error);
        }
}

/**
 * Calculates the number of days between today and the date passed to the function
 * @param {string} date - date passed to function 
 * @returns Number of days between now and the date
 */
const calculateDays = (date) => {
    //check for blank date
    if (date === ''){
        return 0;
    }
    //calculate the difference in ms between the parameter date
    //and now, round up
    const diffInMs = Date.parse(date) - Date.now();
    const diffInDays = Math.ceil(timeunit.milliseconds.toDays(diffInMs));

    return diffInDays;
}

/**
 * Creates a url for an API query to the weather bit service
 * @param {obj} positionObj - contains longitude and latitude data for location 
 * @param {string} apiKey - security key to use the service 
 * @returns a string representing the url to made the desired query
 */
const forecastWeatherUrl = (positionObj, apiKey) => {
    const base = `https://api.weatherbit.io/v2.0/forecast/daily?`;
    const url = `${base}&lat=${positionObj.lat}&lon=${positionObj.long}&key=${apiKey}`;
    return url;
}

module.exports = app;