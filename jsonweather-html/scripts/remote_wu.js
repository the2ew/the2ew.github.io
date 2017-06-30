// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
       url : "https://api.wunderground.com/api/184bed1350fda725/geolookup/conditions/q/" + lat + "," + long + ".json",
       dataType : "jsonp",
       success : function(parsed_json) {
          var location = parsed_json['current_oberservation']['display_location']['full'];
          $("#cityDisplay").html(location);
          $("#title").html(location + " |Weather Home");
          
          var temp_f = parsed_json['current_observation']['temp_f'];
          $("currentTemp").html(Math.round(temp_f) + "&#8457F");
          
          var summaryText = parsed_json['current_observation']['weather'];
          $("#summary").html(summaryText);
          
          var feel = parsed_json['current_observation']['feelslike_f'];
          $("#add1").html("Feels like: " + feel + "&#176F")
          
          var speed = parsed_json['current_observation']['wind_mph'];
          $("#add2").html("Wind: " + speed + " MPH");
          
          var humidity = parsed_json['current_observation']['relative_humidity'];
          $("#add3").html("Humidity: " + humidity);
          
          
          $("#cover").fadeOut(250);
       }





//      $("#cover").fadeOut(250);
//    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
