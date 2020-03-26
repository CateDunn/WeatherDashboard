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
        console.log(cityName)

        //date

        //icon (shown on page)
        var weatherIcon = response.weather[0].icon
        console.log(weatherIcon)
        var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $('#test').html("<img src='" + iconUrl  + "'>");

        //temp (converted to F)
        var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(cityTemp)

        //humidty
        var cityHumidity = response.main.humidity
        console.log(cityHumidity)

        //windspeed
        var cityWindSpeed = response.wind.speed
        console.log(cityWindSpeed)

        //UV index

      });
});