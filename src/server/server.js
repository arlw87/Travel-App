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

    geoNamesFetch(geonameUsername, 'Paris')
    .then((data) => {
        return extractGeonamesData(data);
    }).then((data) => console.log(data));

    res.send({status:'complete'});
});


//post query to the geonames API
//http://api.geonames.org/searchJSON?formatted=true&q=london&maxRows=3&lang=en&username=arlw54
const geoNamesFetch = async (username, location) => {

    //create the geoNamesFetchURL
    const base = 'http://api.geonames.org/searchJSON?formatted=true&q=';

    const url = `${base}${location}&maxRows=3&lang=en&username=${username}`;

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

const extractGeonamesData = (dataObj) => {
    return {lat: dataObj.geonames[0].lat,
            long: dataObj.geonames[0].lng}
}