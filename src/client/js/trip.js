//images
import tempIcon from "../media/static/temperature_icon.png";
import clockIcon from "../media/static/clock_icon.png";

//help function
import {resetResults} from "./formHandler";

//Control all actions to do with planning trip
let latestResults = null;

export const updateResults = (resultsObj) => {
    latestResults = resultsObj;
} 

//Add trip. Click the add trip button on the results form
const addTripButton = document.querySelector('.results button');
addTripButton.addEventListener('click', (event)=> {
    
    if (latestResults == null){
        alert('error adding trip results');
        return;
    }
    //parse results object for add trip function
    const imageURL = latestResults.response.imageUrl;
    const location = latestResults.response.location.place;
    const daysToTrip = latestResults.response.daysToTrip;
    const weatherInfo = latestResults.response.weather.description;
    const weatherIconUrl = latestResults.response.weather.iconUrl;
    const highTemp = latestResults.response.weather.highTemp;
    const lowTemp = latestResults.response.weather.lowTemp;
    
   const newCardElement = addTrip(location, daysToTrip, weatherIconUrl, weatherInfo, highTemp, lowTemp, imageURL);

    //if this is the first trip to add then display the my trip section
    //remove the display none class and add the display flex class
    const myTripSection = document.querySelector('#travel-log');
    if (myTripSection.classList.contains('section-display-none')){
        myTripSection.classList.remove('section-display-none');
        myTripSection.classList.add('section-display-flex');
    }

    //scroll to the my trip section
    // myTripSection.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end"
    // });
    //scroll to the newly added card
    newCardElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
    });

    //reset result screen
    //delay this so it doesnt display appear instantly, 
    //spoiling the scroll smooth effect 
    setTimeout(resetResults, 500);
});


/**
 * Add the new trip into the my trip section by creating a card using a document fragment
 * and inserting it at the end of the my trip card section
 * @param {} location 
 */
const addTrip = (location, timeToTrip, weatherIcon, weatherDescription, highTemp, lowTemp, imageURL) => {
    //create a Document fragment to contain the card
    //let tripCard = new DocumentFragment();

    let htmlString = `<div class="travel-card display-flex shadow">
    <div class="card-image">
      <h2 class="locationHeader">${location}</h2>
    </div>
    <div class ="card-text">
      <div class="card-time-to-trip">
        <img src=${clockIcon}>
        <p>${timeToTrip} days until trip</p>
      </div>
      <div class="card-divider"></div>
      <div class="card-weather-section">
        <img class="card-weather-icon" src="${weatherIcon}">
        <div class="card-weather-details">
          <h3>${weatherDescription}</h3>
          <div class="card-temperature-details">
            <img class="card-temperature-details-image" src=${tempIcon}>
            <h4 class="card-temperature-details-temps">${highTemp} / ${lowTemp} &deg C</h4>
          </div>
        </div>
      </div>
      <button class="remove-trip" >Remove Trip</button>
    </div>
    </div>`;

    let tripCard = htmlToElement(htmlString);
    tripCard.querySelector('.card-image').style.cssText = `background-image: url(${imageURL});`;

    //add the remove card event listener
    tripCard.querySelector('.remove-trip').addEventListener('click', (event)=> {
        console.log('I am clicking a delete button');
        event.target.parentElement.parentElement.remove();
    });

    //add card to dom
    //document.querySelector('.travel-cards').insertAdjacentElement("beforeend", tripCard);
    const addNewTripCard = document.querySelector('.add-new-trip');
    addNewTripCard.parentElement.insertBefore(tripCard, addNewTripCard);

    return tripCard;

}


//html to Element
const htmlToElement = (htmlString) => {
    let template = document.createElement('template'); //create a template element
    const html = htmlString.trim();
    template.innerHTML = html; //add the html string
    return template.content.firstChild; //return the content inside the template which is an element
}



//Add New Trip Card Button
document.querySelector('.add-new-trip').addEventListener('click', (event) => {
    //simpl;y scroll up to the form section
    document.querySelector('#form-section').scrollIntoView({
        behavior: "smooth"
    });
});

