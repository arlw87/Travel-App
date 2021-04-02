//file contains functions to deal with error handling

/**
 * Displays an error message box over the form section of the web app when an error occurs. By adding
 * the class error-display, to the error handling div, which is currently not displayed the element 
 * will display.
 * @param {string} errorMessage - Message to display in the error message box 
 * @returns 
 */
export const displayError = (errorMessage) => {
    //display the error element
    const errorDisplay = document.querySelector('.error-handler-background');
    errorDisplay.classList.add('error-display');
    errorDisplay.classList.remove('error-non-display');

    //add error message to message box
    document.querySelector('.error-handler-message-box p').innerHTML = errorMessage;
    return;
}


/**
 * Creates an on click listener for the error message box close button. When the button, an 'X' in
 * the top right hand corner of the message box is clicked the message box is closed. This is
 * achieved by setting and removing classes on the error-handler div. 
 */
document.querySelector('.error-button').addEventListener('click', (event) => {
    //remove the error display
    const errorDisplay = document.querySelector('.error-handler-background');
    errorDisplay.classList.remove('error-display');
    errorDisplay.classList.add('error-non-display');
    return;
});