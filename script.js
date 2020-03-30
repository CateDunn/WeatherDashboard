console.log('testing')

var searchedCity = $('#searched-city').val().trim();
var APIkey = '5cd539647450f9a07b96edfc16f158cb';
var format = ('L');
var moment = moment();
//curent date (automatically updates)
var dateResult = moment.format(format);
var last = localStorage.getItem('city');
var lastCity = localStorage.getItem('last city')


$(document).ready(function Render(){

  var searchedCity = $('#searched-city').val().trim();
  var city = document.createElement("tr");
  //add city typed in to list below
  city.textContent = searchedCity;
  $('#search-history').prepend(city);
  //save to local storage
  localStorage.setItem('city', searchedCity); 

  //API call 1
  queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + lastCity + '&appid=5cd539647450f9a07b96edfc16f158cb'
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
      $('#info').addClass('info');
      //name
      var cityName = response.name;
      $(".city").html("<h3>" + cityName + " (" + dateResult + ")</h3>");
      localStorage.setItem('last city', cityName);

      //icon (shown on page)
      var weatherIcon = response.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
      $('.icon').html("<img src='" + iconUrl  + "'>");

      //temp (converted to F)
      var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
      $(".temp").text("Temperature: " + cityTemp.toFixed(1) + " ° F");
    
      //humidty
      var cityHumidity = response.main.humidity;
      $('.humidity').text("Humidity: " + cityHumidity + " %");

      //windspeed
      var cityWindSpeed = response.wind.speed;
      $('.windspeed').text("Wind Speed: " + cityWindSpeed + " MPH");

      //lattitude
      var lattitude = response.coord.lat;
      
      //longitude
      var longitude = response.coord.lon;

      //UV index API call  
      uvURL = 'http://api.openweathermap.org/data/2.5/uvi?appid=5cd539647450f9a07b96edfc16f158cb&lat=' + lattitude + '&lon=' + longitude
        $.ajax({
          url: uvURL,
          method: "GET"
          }).then(function(response) {
          
          //UV index
          var uvIndex = response.value;
          var UV = parseFloat(uvIndex).toFixed(2);
          $('.uvindex').text("UV index: " + uvIndex)
            if (UV >= 7)
              $('.uvindex').addClass('severe');
            else if (UV >= 4 && UV < 7)
              $('.uvindex').addClass('moderate');
            else
              $('.uvindex').addClass('favorable');

          });
  });

  //API call for 5 Day Forecast
  queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?q=' + lastCity + '&appid=5cd539647450f9a07b96edfc16f158cb';
  $.ajax({
  url: queryURL2,
  method: "GET"
  }).then(function(response) {
  $('h3').removeClass('hide');
  $('#5-day').addClass('info');
  $('.p-2').addClass('boxes');

  //date
  var date1 = response.list[5].dt_txt;
  var date2 = response.list[13].dt_txt;
  var date3 = response.list[21].dt_txt;
  var date4 = response.list[29].dt_txt;
  var date5 = response.list[37].dt_txt;
  $('.date1').html(date1);
  $('.date2').html(date2);
  $('.date3').html(date3);
  $('.date4').html(date4);
  $('.date5').html(date5);

  //icon 
  var icon1 = response.list[5].weather[0].icon;
  var iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
  $('.icon1').html("<img src='" + iconUrl1  + "'>");
  var icon2 = response.list[13].weather[0].icon;
  var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
  $('.icon2').html("<img src='" + iconUrl2  + "'>");
  var icon3 = response.list[21].weather[0].icon;
  var iconUrl3 = "http://openweathermap.org/img/w/" + icon3+ ".png";
  $('.icon3').html("<img src='" + iconUrl3  + "'>");
  var icon4 = response.list[29].weather[0].icon;
  var iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
  $('.icon4').html("<img src='" + iconUrl4  + "'>");
  var icon5 = response.list[37].weather[0].icon;
  var iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
  $('.icon5').html("<img src='" + iconUrl5  + "'>");
  
  //temp (converted to Farenheit)
  var temp1 = (response.list[5].main.temp - 273.15) * 1.80 + 32;
  var temp2 = (response.list[13].main.temp - 273.15) * 1.80 + 32;
  var temp3 = (response.list[21].main.temp - 273.15) * 1.80 + 32;
  var temp4 = (response.list[29].main.temp - 273.15) * 1.80 + 32;
  var temp5 = (response.list[37].main.temp - 273.15) * 1.80 + 32;
  $('.temp1').text("Temp: " + temp1.toFixed(1) + " ° F");
  $('.temp2').text("Temp: " + temp2.toFixed(1) + " ° F");
  $('.temp3').text("Temp: " + temp3.toFixed(1) + " ° F");
  $('.temp4').text("Temp: " + temp4.toFixed(1) + " ° F");
  $('.temp5').text("Temp: " + temp5.toFixed(1) + " ° F");

  //humidity
  $('.humidity1').text('Humidity: ' + response.list[5].main.humidity + "%");
  $('.humidity2').text('Humidity: ' + response.list[13].main.humidity + "%");
  $('.humidity3').text('Humidity: ' + response.list[21].main.humidity + "%");
  $('.humidity4').text('Humidity: ' + response.list[29].main.humidity + "%");
  $('.humidity5').text('Humidity: ' + response.list[37].main.humidity + "%");
  
  }); 

  
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
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      $('#info').addClass('info');
      //name
      var cityName = response.name;
      $(".city").html("<h3>" + cityName + " (" + dateResult + ")</h3>");
      localStorage.setItem('last city', cityName);

      //icon (shown on page)
      var weatherIcon = response.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
      $('.icon').html("<img src='" + iconUrl  + "'>");

      //temp (converted to F)
      var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
      $(".temp").text("Temperature: " + cityTemp.toFixed(1) + " ° F");
    
      //humidty
      var cityHumidity = response.main.humidity;
      $('.humidity').text("Humidity: " + cityHumidity + " %");

      //windspeed
      var cityWindSpeed = response.wind.speed;
      $('.windspeed').text("Wind Speed: " + cityWindSpeed + " MPH");

      //lattitude
      var lattitude = response.coord.lat;
      
      //longitude
      var longitude = response.coord.lon;
      
      //UV index API call  
      uvURL = 'http://api.openweathermap.org/data/2.5/uvi?appid=5cd539647450f9a07b96edfc16f158cb&lat=' + lattitude + '&lon=' + longitude
        $.ajax({
          url: uvURL,
          method: "GET"
          }).then(function(response) {
          
          //UV index
          var uvIndex = response.value;
          var UV = parseFloat(uvIndex).toFixed(2);
          $('.uvindex').text("UV index: " + uvIndex)
            if (UV >= 7)
              $('.uvindex').addClass('severe');
            else if (UV >= 4 && UV < 7)
              $('.uvindex').addClass('moderate');
            else
              $('.uvindex').addClass('favorable');

          });

      });

      //API call for 5 Day Forecast
      queryURL2 = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchedCity + '&appid=5cd539647450f9a07b96edfc16f158cb';
      $.ajax({
      url: queryURL2,
      method: "GET"
      }).then(function(response) {
      $('h3').removeClass('hide');
      $('#5-day').addClass('info');
      $('.p-2').addClass('boxes');

      //date
      var date1 = response.list[5].dt_txt;
      var date2 = response.list[13].dt_txt;
      var date3 = response.list[21].dt_txt;
      var date4 = response.list[29].dt_txt;
      var date5 = response.list[37].dt_txt;
      $('.date1').html(date1);
      $('.date2').html(date2);
      $('.date3').html(date3);
      $('.date4').html(date4);
      $('.date5').html(date5);

      //icon 
      var icon1 = response.list[5].weather[0].icon;
      var iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
      $('.icon1').html("<img src='" + iconUrl1  + "'>");
      var icon2 = response.list[13].weather[0].icon;
      var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
      $('.icon2').html("<img src='" + iconUrl2  + "'>");
      var icon3 = response.list[21].weather[0].icon;
      var iconUrl3 = "http://openweathermap.org/img/w/" + icon3+ ".png";
      $('.icon3').html("<img src='" + iconUrl3  + "'>");
      var icon4 = response.list[29].weather[0].icon;
      var iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
      $('.icon4').html("<img src='" + iconUrl4  + "'>");
      var icon5 = response.list[37].weather[0].icon;
      var iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
      $('.icon5').html("<img src='" + iconUrl5  + "'>");
      
      //temp (converted to Farenheit)
      var temp1 = (response.list[5].main.temp - 273.15) * 1.80 + 32;
      var temp2 = (response.list[13].main.temp - 273.15) * 1.80 + 32;
      var temp3 = (response.list[21].main.temp - 273.15) * 1.80 + 32;
      var temp4 = (response.list[29].main.temp - 273.15) * 1.80 + 32;
      var temp5 = (response.list[37].main.temp - 273.15) * 1.80 + 32;
      $('.temp1').text("Temp: " + temp1.toFixed(1) + " ° F");
      $('.temp2').text("Temp: " + temp2.toFixed(1) + " ° F");
      $('.temp3').text("Temp: " + temp3.toFixed(1) + " ° F");
      $('.temp4').text("Temp: " + temp4.toFixed(1) + " ° F");
      $('.temp5').text("Temp: " + temp5.toFixed(1) + " ° F");

      //humidity
      $('.humidity1').text('Humidity: ' + response.list[5].main.humidity + "%");
      $('.humidity2').text('Humidity: ' + response.list[13].main.humidity + "%");
      $('.humidity3').text('Humidity: ' + response.list[21].main.humidity + "%");
      $('.humidity4').text('Humidity: ' + response.list[29].main.humidity + "%");
      $('.humidity5').text('Humidity: ' + response.list[37].main.humidity + "%");
      
      });   
    });








});