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