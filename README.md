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

Once the project is installed. 

## Using the web App

### Dependencies
Project developed with node v14.15.4. All dependencies listed in the package.json file.

