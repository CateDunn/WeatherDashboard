# WeatherDashboard
# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs

WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
    -create search box in html - yes
        -add magnifying glass icon button
    -add city searched for to query URL (searchedCity variable)
    -display city in search history - yes
        -set the number of cities to be displayed
    -save city to local storage - only saving the most recent?
    -display city to the right box - yes
        -format city box
    
WHEN I view current weather conditions for that city
THEN I am presented with the 
    - set up API call - yes
    - determine the attributes of the response needed & location 
        city name - "name"
        the date - added using moment JS
        an icon representation of weather conditions - "icon"
        the temperature - "temp" (convert to Farenheit)
        the humidity - "humidity"
        the wind speed - "wind" . "speed"
        the UV index - separate API
     -display them in html - yes
       

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
    -set colors in CSS for conditions - yes
        0-3.9 = favorable
        4-6.9 = moderate
        7-9 = severe
    -use UV index attribute to determine what color will be displayed - yes
        - fix color to display only over the number

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
    -set up API call to the 5-day forecast API - yes
    - determine attributes needed and locations  (do all at 12PM that day)
        -date (moment)
        -icon
        -temp
        -humidity
    -create/display them in html
    -creates title that says "5 Day Forecast"

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

