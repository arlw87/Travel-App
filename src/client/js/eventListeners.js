// Load all the event listeners

import {heroEventListenerCreate} from './hero.js';
import {createTrip} from './trip.js';

document.addEventListener('DOMContentLoaded', (event) => {

    //Add the scroll on click call to action button
    heroEventListenerCreate();

    //Addtrip event listener
    //Add trip button on results card
    const addTripButton = document.querySelector('.results button');
    addTripButton.addEventListener('click', createTrip);

});