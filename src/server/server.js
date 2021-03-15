const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

//Sensitive information
const geonameUsername = process.env.GEONAME_USERNAME; 
const weatherbit_api = process.env.WEATHERBIT_API_KEY;

//start the server
const port = 8000;
const server = app.listen(port,  ()=>{
    console.log(`server running on port ${port}`);
});

//localhost:${port}
//APIs
app.post(`/query`, (req, res) => {
    console.log("Post to API 'Query'");
    console.log(req.body);
    const location = req.body.destination;
    const date = req.body.date;

    const geonameUrl = geoNamesUrl(geonameUsername, location);
    fetchData(geonameUrl, 'POST')
        .then((result) => {
           return extractGeonamesData(result); 
        }).then((result) => {
            console.log('results');
            console.log(result);
            const url = forecastWeatherUrl(result, weatherbit_api);
            //promise not returned until the fetchData is complete
            //fetchData returns a promise
            //a then is not resolved until a value is returned
            console.log('fetching data');
            return fetchData(url, 'GET');
        }).then(result => extractWeatherData(result, date))
        .then(result => console.log(result))
        .catch((error) => {
            console.log('There has been an error');
            console.log(error);
        });

    res.send({status:'complete'});
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
    const long = dataObj.geonames[0].lng;
    const lat = dataObj.geonames[0].lat;
    return {lat: lat,
            long: long}
}

//weather bit API 
const currentWeatherUrl = (positionObj, apiKey) => {
    const base = `https://api.weatherbit.io/v2.0/current?`;
    const url = `${base}lat=${positionObj.lat}&lon=${positionObj.long}&key=${apiKey}`
    return url;
}

//forest API
const forecastWeatherUrl = (positionObj, apiKey) => {
    console.log(positionObj);
    const base = `https://api.weatherbit.io/v2.0/forecast/daily?`;
    const url = `${base}&lat=${positionObj.lat}&lon=${positionObj.long}&key=${apiKey}`;
    console.log(url);
    return url;
}

const extractWeatherData = (data, date) => {

    //use the form on client to ensure a previous date is not selected.

    let weatherData = null;
    //loop through the data and compare date
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

    console.log(date);
    return(weatherData);
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
            console.log(error);
            throw (error);
        }
}
