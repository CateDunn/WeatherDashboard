console.log('testing')

var searchedCity = $('#searched-city').val()
var APIkey = '5cd539647450f9a07b96edfc16f158cb'



$(document).ready(function(){
    $('.btn').click(function(){
        var searchedCity = $('#searched-city').val();
        var city = document.createElement("div");
        //add city typed in to list below
        city.textContent = searchedCity;
        $('#search-history').prepend(city);
        //save to local storage
        localStorage.setItem('city', searchedCity); 
    });

    //API call
    queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=raleigh&appid=' + APIkey;
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        //name
        var cityName = response.name
        $(".city").html("<h3>" + cityName + " Weather Details</h3>");

        //date

        //icon (shown on page)
        var weatherIcon = response.weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $('.icon').html("<img src='" + iconUrl  + "'>");

        //temp (converted to F)
        var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + cityTemp.toFixed(1) + " degrees Farenheit");
    

        //humidty
        var cityHumidity = response.main.humidity
        $('.humidity').text("Humidity: " + cityHumidity)

        //windspeed
        var cityWindSpeed = response.wind.speed
        $('.windspeed').text("Wind Speed: " + cityWindSpeed)

        //UV index
        var uvIndex 
        $('.uvindex').text("UV index: ")

      });
});