//interactive webpage
const formSection = document.querySelector('#form-section');
const callToAction = document.querySelector('.call-to-action');

callToAction.addEventListener('click', (event)=> {
    formSection.scrollIntoView({
        behavior: "smooth"
    });
});

