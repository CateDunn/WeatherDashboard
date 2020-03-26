console.log('testing')

var searchedCity = $('#searched-city').val()
console.log(searchedCity)


$(document).ready(function(){
    $('.btn').click(function(){
        var searchedCity = $('#searched-city').val();
        var city = document.createElement("div");
        //add city typed in to list below
        city.textContent = searchedCity;
        $('#search-history').prepend(city)
        //save to local storage
        localStorage.setItem('city', searchedCity);
        $('#city-data').text(searchedCity)
        
       
        
    })
});