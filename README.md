# Travel Planner Web Application

## Description
Fullstack application with a responsive and dynamic UI that allows a user to plan a multi destination trip displaying an image and weather data for each location. The app, built in html, sass and javascript uses a nodejs backend which utilities three third party APIs to retrieve the data for the trip 

## Installation

1. Ensure that npm and node are installed on your system. This project was developed with node v14.15.4 and npm 6.14.10.
2. Clone and download the project from GitHub. 
3. Instal all the project dependencies
   ```npm install```
4. The project uses 3 external APIs for its functionality these include:
   - [geonames](http://www.geonames.org/) validate username required
   - [weather bit](https://www.weatherbit.io/api) Free daily forecast account needed to obtain API key
   - [Pixabay](https://pixabay.com/api/docs/) Free account needed to get API key
  
   Once signed up to these services, create a file called .env in the root directory and copy the code below into the file, entering your own details instead of the question marks. 
      ```
      GEONAME_USERNAME = '???'
      WEATHERBIT_API_KEY = '???'
      PIXELBAY_API_KEY = '???'
      ```

## Building and running the application

The front end application is built with Webpack and has two configurations a development build and a production build. 

- To build the development configuration use ```npm run build-dev```
- To build the production configuration use ```npm run build-prod```

```npm run start```

Load a browser and access the web app at 

To run the application [http://localhost:8080/](http://localhost:8080/).

## Usage
The purpose of the application is for users to build a travel plan for a trip they would like to take. The user can search for destination they are interested in and specify a date when they would like to visit the destination. This search will return with a result card with an image of the location and it weather forecast. _Note if the trip is starting more than 16 days away the weather forecast displayed will be for 16 days time as that is the last forecast available_. If the User likes that destination they can then add it to their travel plan by clicking the add button on the results card. This will take the user to the 'my travel plan' section of the webpage where their recent search result will be displayed with any previous ones. If they user wishes to add another trip they can click on the 'Add New Trip' card in the my travel plan section which will take the user back to the form section of the site to search for a new destination. A user can also delete a trip by clicking the 'remove trip' button on current 'my travel plan' cards.

## Dependencies
Project developed with node v14.15.4. All dependencies listed in the package.json file.

## Overview 


### Front End 
The front end is designed with html, sass and js. It is a responsive design that works from small mobile devices to large desktop displays. The UI was designed to be attention grabbing and dynamic, implementing the following features: 

- A full screen hero banner with an animated header and flashing call to action button
- Automatic scrolling of the page when certain events occur
- Form animations when form results are returned 

-- GIF of website animations --

The webpage form provides **validation** of the data input. It checks if the date entered is in the future and that the place name entered doesnt contain unexpected characters or numbers. 





## Error Handling
The user may encouter several errors. These can be
- Local errors, the form identifies data validation issues when the user enters incorrect data
- Remote errors, when the node server is processing the front ends post to the '/query' endpoint an error has occured and this results in a response to the front end with a status of failure and a message detailing the cause of it

When an error occurs a pop up message box appears over the form section of the webpage, detailing the error that has happen.

-- GIF of the error message box --

