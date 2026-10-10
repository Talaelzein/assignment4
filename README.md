
# Weather Dashboard App

## Description

A responsive weather dashboard that displays live weather
information for a city entered by the user.

The application retrieves current weather data from the
OpenWeatherMap API.

## Features

- Search for weather by city name
- Display current temperature in Celsius
- Display weather conditions and a weather icon
- Display humidity and wind speed
- Show a loading indicator during API requests
- Handle invalid cities and failed requests
- Responsive design for desktop and mobile

## Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API

## Setup Instructions

1. Download or clone this repository.

2. Obtain a free API key from:
   https://openweathermap.org/api

3. Create a file named `config.js` in the project folder.

4. Add the following code to `config.js`:

   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```

5. Replace `YOUR_API_KEY_HERE` with your actual API key.

6. Open `index.html` using VS Code Live Server.

7. Enter a city name and click "Search Weather".

## API Key Security

The `config.js` file is excluded from Git using `.gitignore`,
so the actual API key is not committed to GitHub.

Because this is a client-side application, the API key may
still be visible through browser developer tools.

## API

OpenWeatherMap Current Weather Data API

## Author

Weather Dashboard — Assignment 4
