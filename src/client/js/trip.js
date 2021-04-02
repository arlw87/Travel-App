//Code to add new trip to the my trip section 

//images to added in to the result card
import tempIcon from "../media/static/temperature_icon.png";
import clockIcon from "../media/static/clock_icon.png";

//resets the results card when result is added to the trip section
import {resetResults} from "./formHandler";

//latest results will be saved to this object
let latestResults = null;

/**
 * Update the latest results. When results are returned from server
 * this function is run in the formHandler code to update this latestResults
 * object so that it can be used to generate a trip card if required
 */
export const updateResults = (resultsObj) => {
    latestResults = resultsObj;
} 

//put code into a private scope
{

  //Add trip button on results card
  const addTripButton = document.querySelector('.results button');
  /**
   * Set up an event listener to fire when the add trip button is the 
   * results form is clicked
   */
  addTripButton.addEventListener('click', (event)=> {
     
    //error if the latest results is null 
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
      
    //create and insert the new trip card into the DOM
    //return the card so it can be scrolled too (see below)
    const newCardElement = addTrip(location, daysToTrip, weatherIconUrl, weatherInfo, highTemp, lowTemp, imageURL);

    //my trip section is not initially displayed
    //if this is the first trip to add then display the my trip section
    //remove the display none class and add the display flex class
    const myTripSection = document.querySelector('#travel-log');
    if (myTripSection.classList.contains('section-display-none')){
        myTripSection.classList.remove('section-display-none');
        myTripSection.classList.add('section-display-flex');
    }

    //Scroll to the new trip card that was just created
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
   */
  const addTrip = (location, timeToTrip, weatherIcon, weatherDescription, highTemp, lowTemp, imageURL) => {

    //html for the trip card
      let htmlString = `<div class="travel-card display-flex shadow">
      <div class="card-image">
        <h2 class="locationHeader">${location}</h2>
      </div>
      <div class ="card-text">
        <div class="card-time-to-trip">
          <img src=${clockIcon}>
          <p>${timeToTrip}   days until trip</p>
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

      //convert string to element and return the element
      let tripCard = htmlToElement(htmlString);
      //add location image to the card
      tripCard.querySelector('.card-image').style.cssText = `background-image: url(${imageURL});`;

      //add the remove card event listener
      tripCard.querySelector('.remove-trip').addEventListener('click', (event)=> {
          event.target.parentElement.parentElement.remove();
      });

      //insert new trip card before the add new trip card
      const addNewTripCard = document.querySelector('.add-new-trip');
      addNewTripCard.parentElement.insertBefore(tripCard, addNewTripCard);

      return tripCard;

  }


  /***
   * Converts the string into a html element
   */
  const htmlToElement = (htmlString) => {
      let template = document.createElement('template'); //create a template element
      const html = htmlString.trim();
      template.innerHTML = html; //add the html string
      return template.content.firstChild; //return the content inside the template which is an element
  }

  /**
   * Add an click event listener to the add new trip card that will scroll up to the form section
   */
  document.querySelector('.add-new-trip').addEventListener('click', (event) => {
      //simpl;y scroll up to the form section
      document.querySelector('#form-section').scrollIntoView({
          behavior: "smooth"
      });
  });
}

