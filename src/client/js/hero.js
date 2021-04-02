//function used in hero banner

//use code blocks to make variables private
{
    const formSection = document.querySelector('#form-section');
    const callToAction = document.querySelector('.call-to-action');

    /**
     * Add click listner to the 'Call to Action' button, to scroll the page down
     * to the form section when clicked. 
     */
    callToAction.addEventListener('click', (event)=> {
        formSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}


