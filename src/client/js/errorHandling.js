//error handling
export const displayError = (errorMessage) => {
    //display the error element
    const errorDisplay = document.querySelector('.error-handler-background');
    errorDisplay.classList.add('error-display');
    errorDisplay.classList.remove('error-non-display');

    //add error message to message box
    document.querySelector('.error-handler-message-box p').innerHTML = errorMessage;
    return;
}


//error message button event
document.querySelector('.error-button').addEventListener('click', (event) => {

    //remove the error display
    const errorDisplay = document.querySelector('.error-handler-background');
    errorDisplay.classList.remove('error-display');
    errorDisplay.classList.add('error-non-display');

});