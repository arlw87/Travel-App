// Load all the event listeners

import {heroEventListenerCreate} from './hero.js';
import {createTrip, scrollToForm} from './trip.js';
import {performSearch, displayResultsCard} from './formHandler.js';
import {closeErrorMessageBox} from './errorHandling';

document.addEventListener('DOMContentLoaded', (event) => {

    //Add the scroll on click call to action button
    heroEventListenerCreate();

    //Add trip event listener
    const addTripButton = document.querySelector('.results button');
    addTripButton.addEventListener('click', createTrip);

    //form search by user
    const searchBtn = document.querySelector('#search');
    searchBtn.addEventListener('click', performSearch);

    document.querySelector('.error-button').addEventListener('click', closeErrorMessageBox);

    //When the form has finished it animation, of moving from the center to the top of the section
    //then display the results card
    document.querySelector('form').addEventListener('animationend', displayResultsCard);

    //Add new trip card event listener
    document.querySelector('.add-new-trip').addEventListener('click', scrollToForm);
});
