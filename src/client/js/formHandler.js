//Handles the user form interactions

import { isValidateDate, isValidationPlaceName } from "./validation";
import { displayError } from "./errorHandling";

//latest results will be saved to this object
let latestResults = null;

/**
 * Saves the latest results so they can be used by the createTrip function.
 */
const setResults = (resultsObj) => {
    latestResults = resultsObj;
} 

/**
 * Returns the latest results. Used by createTrip function to display results
 * in a new trip card
 * @returns latestResults object
 */
export const getResults = () => {
    return latestResults;
}


export const performSearch = (event) => {

    //stop reloading of page
    event.preventDefault();

    //get the user input data
    const destination = document.querySelector('#destination').value;
    const date = document.querySelector('#date').value;
    
    //check if the date is validate
    if (!isValidateDate(date)){
        displayError('Date must be in the future');
        return;
    }

    //check if the place name is valid
    if(!isValidationPlaceName(destination)){
        displayError('Invalid place name');
        return;
    }

    //create object to hold form data to send
    const sendObj = {
        destination: destination,
        date: date
    }

    //The UI will respond differently depending on if this is the first search performed
    //or not. If this is the first search there will be no result card visible and the 
    //spinner will be displayed in a different position
    if (isFormCenter()){
        //used to tell user the form is being processed
        displayLoaderSpinnerCenter();
    } else {
        console.log("second search");
        //remove previous results and show non position translated spinner
        hideResultsCard();
        displayLoaderSpinner();
    }

    /**
     * Post form data to local sever and process the response when it is recieved 
     */
    postData(`/query`, sendObj)
        .then(result => {
            //if there is an error from the server display error message and return
            if (result.status==='failure'){
                processError(result.message);
                return;
            }
            //display the returned results in the results card
            displayResults(result);
            //send latest results to the trip js file
            //so they can be used to display in the trip section
            //if user add serach results to the 'my trip' section
            setResults(result);
        })
        .catch((error) => {
            processError("Error with search request");
        });
}

/**
 * Handles UI events if there is an error from the server or when trying to contact server
 * @param {string} error - message to display 
 */
const processError = (error) => {
    //display error
    displayError(error);
    hideLoaderSpinner();
    clearForm();
    //reset the position of the form to the center of the page
    //if form is at the top of the section
    if (document.querySelector('form').classList.contains('transformEndPosition')){
        resetResults();
    }
}

/**
 * Send a post request in JSON format to the defined url and returns the parsed response
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

/**
 * Display the load spinner to demonstrate to the user that their request is processing
 * If the form is in the center (using transform translation), then the spinner position needs 
 * to be translated to be under the form
 */
const displayLoaderSpinnerCenter = () => {
    displayLoader();
    const loader = document.querySelector('.loader');

    if (!loader.classList.contains('loader-animation-translate-rotate')){
        loader.classList.add('loader-animation-translate-rotate');
        loader.classList.remove('loader-animation-rotate');
    }
}

/**
 * Display the load spinner to demonstrate to the user that their request is processing
 * When the form is at the top of the section the spinner is not translated and appears 
 * underneath it
 */
const displayLoaderSpinner = () => {
    displayLoader();
    const loader = document.querySelector('.loader');

    if (loader.classList.contains('loader-animation-translate-rotate')){
        loader.classList.remove('loader-animation-translate-rotate');
        loader.classList.add('loader-animation-rotate');
    }
}

/**
 * Displays the spinner by setting css display classes
 */
const displayLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('display-flex');
    loader.classList.remove('display-none');
}

/**
 * Hides the spinner by setting the correct css display classes
 */
const hideLoaderSpinner = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('display-flex');
    loader.classList.add('display-none');
}

/**
 * Displays the search results returned from the server in the results card
 * @param {object} data - response object from the server that contains the search results 
 */   
const displayResults = (data) => {

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

    //update all the fields contain with the new results
    image.style.cssText = `background-image: url(${imageURL});`
    locationName.innerHTML = location;
    weatherDescription.innerHTML = weatherInfo;
    weatherIcon.src = weatherIconUrl;
    weatherTemps.innerHTML = `${highTemp} / ${lowTemp} &deg C`;
    daysElement.innerHTML = ` ${daysToTrip}   days until your trip`

    //When the form is in the center of the section, an animation is applied to the results
    //to move the form up to allow the result card to be displayed below it
    //an event listener when animation is ended will fire to display the results card
    if (isFormCenter()){
        document.querySelector('form').classList.add('transformEndPosition');
        document.querySelector('#form-section > h2').classList.add('transformEndPosition');   
        document.querySelector('form').classList.remove('transformStartPosition');
        document.querySelector('#form-section > h2').classList.remove('transformStartPosition');
    } else {
        //if the form is not in the center then no animation required so just display the results
        //card
        displayResultsCard();
    }

    hideLoaderSpinner();
    clearForm();
}

//When the form has finished it animation, of moving from the center to the top of the section
//then display the results card
document.querySelector('form').addEventListener('animationend', (event)=>{
    displayResultsCard();
});

/**
 * Display the results card
 */
const displayResultsCard = () => {
    document.querySelector('.results').classList.remove('display-none');
    document.querySelector('.results').classList.add('display-flex');
}

//determine if the form is in the center of the section or not
//This will affect the poisiton of other elements such as the loader spinner
//It will also determine if the form needs to be animated before results are shown
const isFormCenter = () => {
    return document.querySelector('form').classList.contains('transformStartPosition');
}

/**
 * Clear the form
 */
const clearForm = ()=>{
    document.querySelector('form').reset();
}
   


/**
 * Hide the results card and then move the form and the section title back to the center of the
 * section
 */
 export const resetResults = () => {
    //hide the results card
    hideResultsCard();
    //moves the heading and form back to the middle of the page
    document.querySelector('form').classList.remove('transformEndPosition');
    document.querySelector('#form-section > h2').classList.remove('transformEndPosition');
    document.querySelector('form').classList.add('transformStartPosition');
    document.querySelector('#form-section > h2').classList.add('transformStartPosition');
}

/**
 * Hide the results card
 */
const hideResultsCard = () => {
    document.querySelector('.results').classList.add('display-none');
    document.querySelector('.results').classList.remove('display-flex');
}