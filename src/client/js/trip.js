//Control all actions to do with planning trip
let latestResults = null;

export const updateResults = (resultsObj) => {
    latestResults = resultsObj;
} 

//Add trip. Click the add trip button on the results form
const addTripButton = document.querySelector('.results button');
addTripButton.addEventListener('click', (event)=> {
    console.log('add trip');
    console.log('From trip.js');
    console.log(latestResults);
    
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
    
    addTrip(location, daysToTrip, weatherIconUrl, weatherInfo, highTemp, lowTemp, imageURL);
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
        <img src="../media/static/clock_icon.png">
        <p>${timeToTrip} days until trip</p>
      </div>
      <div class="card-divider"></div>
      <div class="card-weather-section">
        <img class="card-weather-icon" src="${weatherIcon}">
        <div class="card-weather-details">
          <h3>${weatherDescription}</h3>
          <div class="card-temperature-details">
            <img class="card-temperature-details-image" src="../media/static/temperature_icon.png">
            <h4 class="card-temperature-details-temps">${highTemp} / ${lowTemp} &deg C</h4>
          </div>
        </div>
      </div>
      <button>Remove Trip</button>
    </div>
    </div>`;

    let tripCard = htmlToElement(htmlString);
    tripCard.querySelector('.card-image').style.cssText = `background-image: url(${imageURL});`

    //add card to dom
    document.querySelector('.travel-cards').insertAdjacentElement("beforeend", tripCard);
}


//html to Element
const htmlToElement = (htmlString) => {
    let template = document.createElement('template'); //create a template element
    const html = htmlString.trim();
    template.innerHTML = html; //add the html string
    return template.content.firstChild; //return the content inside the template which is an element
}