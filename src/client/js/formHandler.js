//handle the form controls
const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click', (event) => {
    //stop reloading of page
    event.preventDefault();

    //handle form validation here
    //TODO: user input validation


    //get the user input data
    const destination = document.querySelector('#destination').value;
    const date = document.querySelector('#date').value;

    const sendObj = {
        destination: destination,
        date: date
    }

    postData('http://localhost:8000/query', sendObj)
        .then(result => displayResults(result))
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

const displayResults = (data) => {

    console.log('From displayResults function');
    console.log(data);

    //get the elements to update
    const image = document.querySelector('.results-image'); //location image
    const locationName = document.querySelector('.locationHeader'); //location name
    
    //weather details
    const weatherDescription = document.querySelector('.weather-details > h3');
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherTemps = document.querySelector('.temperature-details-temps');

    //extract the results from the object
    const imageURL = data.response.imageUrl;
    const location = data.response.location.place;

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

    //display the results card
    //document.querySelector('.results').classList.remove('display-none');
    //document.querySelector('.results').classList.add('display-flex');
    document.querySelector('form').classList.add('transformEndPosition');
    document.querySelector('#form-section > h2').classList.add('transformEndPosition');

    document.querySelector('form').classList.remove('transformStartPosition');
    document.querySelector('#form-section > h2').classList.remove('transformStartPosition');
}

//set up some animation
document.querySelector('form').addEventListener('animationend', (event)=>{
    console.log('Animation has ended');
    document.querySelector('.results').classList.remove('display-none');
    document.querySelector('.results').classList.add('display-flex');
});