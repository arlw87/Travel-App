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

    const geonameUrl = geoNamesUrl(geonameUsername, 'Paris');
    postData(geonameUrl)
        .then((result) => {
           return extractGeonamesData(result); 
        }).then(result => console.log(result));

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
    return {lat: dataObj.geonames[0].lat,
            long: dataObj.geonames[0].lng}
}

//weather bit API 





/**
 * Make a POST fetch to the provided API call and parse the returned JSON data
 * @param {string} url - Address of the API call  
 * @returns The parse json data of the response
 */
const postData = async (url) => {
        const response = await fetch(url, {
            method: 'POST'
        });
    
        try{
            const data = await response.json();
            return data;
        } catch(error){
            console.log(error);
            throw (error);
        }
}
