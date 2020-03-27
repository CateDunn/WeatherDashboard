console.log('testing')

var searchedCity = $('#searched-city').val().trim()
var APIkey = '5cd539647450f9a07b96edfc16f158cb'

var format = ('L');
var moment = moment()
console.log(moment)
//curent date (automatically updates)
var dateResult = moment.format(format);
console.log(dateResult)
//current date + 1 day
//+2 days
//+ 3 days
//+ 4 days
//+ 5 days



$(document).ready(function(){

  //when the search button is clicked..
  $('.btn').click(function(){
    var searchedCity = $('#searched-city').val().trim();
    var city = document.createElement("tr");
    //add city typed in to list below
    city.textContent = searchedCity;
    $('#search-history').prepend(city);
    //save to local storage
    localStorage.setItem('city', searchedCity); 

    //API call 1
    queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&appid=5cd539647450f9a07b96edfc16f158cb'
    console.log(queryURL)
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response)
      //name
      var cityName = response.name
      $(".city").html("<h3>" + cityName + " (" + dateResult + ")</h3>");

      //icon (shown on page)
      var weatherIcon = response.weather[0].icon
      var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
      $('.icon').html("<img src='" + iconUrl  + "'>");

      //temp (converted to F)
        var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
        $(".temp").text("Temperature: " + cityTemp.toFixed(1) + " ° F");
    
      //humidty
      var cityHumidity = response.main.humidity
       $('.humidity').text("Humidity: " + cityHumidity + " %")

      //windspeed
      var cityWindSpeed = response.wind.speed
      $('.windspeed').text("Wind Speed: " + cityWindSpeed + " MPH")

      //lattitude
      var lattitude = response.coord.lat
      
      //longitude
      var longitude = response.coord.lon
      
      //UV index API call  
      uvURL = 'http://api.openweathermap.org/data/2.5/uvi?appid=5cd539647450f9a07b96edfc16f158cb&lat=' + lattitude + '&lon=' + longitude

        $.ajax({
          url: uvURL,
          method: "GET"
          }).then(function(response) {
          
          //UV index
          var uvIndex = response.value
          console.log(uvIndex)
          var UV = parseFloat(uvIndex).toFixed(1)
          console.log(UV)
          $('.uvindex').text("UV index: " + uvIndex)
            if (UV > 7)
              $('.uvindex').addClass('severe')
            else if (4 > UV)
              $('.uvindex').addClass('favorable')
            else
              $('.uvindex').addClass('moderate')
            

          });

    

      });



      //API call for 5 Day Forecast
      queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchedCity + '&appid=5cd539647450f9a07b96edfc16f158cb'
      console.log(queryURL2)
      $.ajax({
      url: queryURL2,
      method: "GET"
      }).then(function(response) {
      console.log(response)
      //temp
      var temp2 = response.list[5].main.temp
      console.log(temp2)
      //icon FIX THIS
      // var icon2 = response.list[5].weather[3]
      // console.log(icon2)
      //humidity
      var humidity2 = response.list[5].main.humidity
      console.log(humidity2)
      
      




      })




      

    });

    


});