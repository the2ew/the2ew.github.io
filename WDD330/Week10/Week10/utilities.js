export function getJSON(url){
    return fetch(url)
    .then(function(response){
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
        return response.json()
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// function getLocationURL() {
//     return new Promise(function(resolve, reject) {
//       getLocation.then(function (data) {
//         var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=" + data.coords.latitude + "&longitude=" + data.coords.longitude + "&maxradiuskm=100";
//         resolve(url);
//       });
//     });
//   }
  
  
//   function getEarthquakeData() {
//     return getLocationURL().then(url => getJSON(url));
//   }