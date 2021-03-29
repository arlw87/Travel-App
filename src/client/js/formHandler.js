import { updateResults } from "./trip";
import { isValidateDate, isValidationPlaceName } from "./validation";
import { displayError } from "./errorHandling";

//handle the form controls
const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click', (event) => {

    console.log('click');

    //stop reloading of page
    event.preventDefault();

    //get the user input data
    const destination = document.querySelector('#destination').value;
    const date = document.querySelector('#date').value;
    
    //handle form validation here
    if (!isValidateDate(date)){
        console.log('Date in the past');
        displayError('Date must be in the future');
        return;
    }

    if(!isValidationPlaceName(destination)){
        console.log('Not a validate place name');
        displayError('Invalid place name');
        return;
    }

    const sendObj = {
        destination: destination,
        date: date
    }

    //determine if this is the first search or not
    if (isFirstSearch()){
        console.log('first search');
        displayLoaderSpinnerFirstSearch();
    } else {
        //not first search
        console.log('Not first search');
        //remove results and show non translated spinner
        hideResultsCard();
        displayLoaderSpinner();
    }

 
    postData('http://localhost:8000/query', sendObj)
        .then(result => {
            console.log('results');
            console.log(result);
            //check to see if there was an error response
            if (result.status==='failure'){
                displayError(result.message);
                hideLoaderSpinner();
                clearForm();
                return;
            }

            displayResults(result);
            //send latest results to the trip js file
            //so they can be used to display if trip is added
            //to my trips section
            updateResults(result);
        })
        .catch((error) => {
            console.log(error);
        });

});

/**
 * Send a post request in JSON format to the defined url 
 * @param {string} url 
 * @param {object} data 
 */
 const postData = async(url, data) => {

    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        throw Error(error);
    }
}

const displayLoaderSpinnerFirstSearch = () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('display-flex');
    loader.classList.remove('display-none');
}

const hideLoaderSpinner = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('display-flex');
    loader.classList.add('display-none');
}

const displayLoaderSpinner = () => {

    const loader = document.querySelector('.loader');
    loader.classList.add('display-flex');
    loader.classList.remove('display-none');

    if (loader.classList.contains('loader-animation-translate-rotate')){
        loader.classList.remove('loader-animation-translate-rotate');
        loader.classList.add('loader-animation-rotate');
    }

}

const displayResults = (data) => {

    console.log('From displayResults function');
    console.log(data);

    //get the elements to update
    const image = document.querySelector('.results-image'); //location image
    const locationName = document.querySelector('.locationHeader'); //location name
    const daysElement = document.querySelector('.time-to-trip > p'); //days until trip
    
    //weather details
    const weatherDescription = document.querySelector('.weather-details > h3');
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherTemps = document.querySelector('.temperature-details-temps');

    //extract the results from the object
    const imageURL = data.response.imageUrl;
    const location = data.response.location.place;
    const daysToTrip = data.response.daysToTrip;

    //weather
    const weatherInfo = data.response.weather.description;
    const weatherIconUrl = data.response.weather.iconUrl;
    const highTemp = data.response.weather.highTemp;
    const lowTemp = data.response.weather.lowTemp;

    image.style.cssText = `background-image: url(${imageURL});`
    locationName.innerHTML = location;
    weatherDescription.innerHTML = weatherInfo;
    weatherIcon.src = weatherIconUrl;
    weatherTemps.innerHTML = `${highTemp} / ${lowTemp} &deg C`;
    daysElement.innerHTML = `${daysToTrip} days until your trip`


    //if the form has transformEndPosition class then a search has already occured


    if (isFirstSearch()){
        document.querySelector('form').classList.add('transformEndPosition');
        document.querySelector('#form-section > h2').classList.add('transformEndPosition');
    
        document.querySelector('form').classList.remove('transformStartPosition');
        document.querySelector('#form-section > h2').classList.remove('transformStartPosition');
    } else {
        displayResultsCard();
    }

    hideLoaderSpinner();
    clearForm();
    //display the results card
    //document.querySelector('.results').classList.remove('display-none');
    //document.querySelector('.results').classList.add('display-flex');
}

//set up some animation
document.querySelector('form').addEventListener('animationend', (event)=>{
    console.log('Animation has ended');
    displayResultsCard();
});

//display results
const displayResultsCard = () => {
    document.querySelector('.results').classList.remove('display-none');
    document.querySelector('.results').classList.add('display-flex');
}

//hide results
export const hideResultsCard = () => {
    document.querySelector('.results').classList.add('display-none');
    document.querySelector('.results').classList.remove('display-flex');
}

//determine if this is first search or the not
//first search has different animation to the next searchs
const isFirstSearch = () => {
    return document.querySelector('form').classList.contains('transformStartPosition');
}

const clearForm = ()=>{
    document.querySelector('form').reset();
}

