// Load all the event listeners

import {heroEventListenerCreate} from './hero.js';
import {createTrip} from './trip.js';
import {performSearch} from './formHandler.js';

document.addEventListener('DOMContentLoaded', (event) => {

    //Add the scroll on click call to action button
    heroEventListenerCreate();

    //Add trip event listener
    const addTripButton = document.querySelector('.results button');
    addTripButton.addEventListener('click', createTrip);

    //form search by user
    const searchBtn = document.querySelector('#search');
    searchBtn.addEventListener('click', performSearch);

});