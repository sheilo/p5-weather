$('#getZip').click(function(){
  var zip = $('#zip').val();
  console.log(zip);

  //Get weather
  $.simpleWeather({
    location: zip,
    success: function(weather) {
    
    console.log(weather);
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      //Get and store state
      var state = weather.region;
      //Get and store state
      var country = weather.country;
      //use image
      var thumb= weather.thumbnail;
      
      // Output to hooks in HTML
      $('.theirtemp').text(temp);
      $('.theircity').text(city);
      $('.theirstate').text(state);
      $('.theircountry').text(country);
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
});
  
});



// 2. Get Geolocation & return Simple Weather
$.getGeolocation({

    navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat + ',' + long)
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object

    success: function(weather) {
        
      console.log(weather);
      
      if (weather.code >= 24 && weather.code <= 30) {
        
        $('body').addClass('snow');
        
      } 
            
      if (weather.code >= 31 && weather.code <= 34) {
        
        $('body').addClass('clear');
        
      } 
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;

      var state = weather.region;
      //Get and store state
      var country = weather.country;
      
      // Output to hooks in HTML
      $('.yourtemp').text(temp);
      $('.yourcity').text(city);
      $('.yourstate').text(state);
      $('.yourcountry').text(country);
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
};