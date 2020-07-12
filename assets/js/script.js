var formEl = document.querySelector('#city-search');
var cityInputEl = document.querySelector('#city-search-input');
var searchButtonEl = document.querySelector('#search-btn');
var searchHistoryEl = document.querySelector('#city-history');
var dayForecastEl = document.querySelector('#current-forecast');
var cityDateEl = document.querySelector('#city-date');
var weatherIconEl = document.querySelector('#weather-icon');
var currentTempEl = document.querySelector('#current-temp');
var currentHumidityEl = document.querySelector('#current-humidity');
var currentWindEl = document.querySelector('#current-wind');
var currentUvEl = document.querySelector('#current-uv-number')
var currentEvSpan = document.querySelector('#current-uv-span');
var weekForecastEl = document.querySelector('#week-forecast');
var weekForcastH2El = document.querySelector('#week-forecast-h2');

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}
// api key b2e132f56dc09569a442a9db110b61f5

var formSubmitHandler = function(event) {
    event.preventDefault();
    //console.log(event);
    // get value from input element
    var cityName = cityInputEl.value.trim();
    //cityInputEl.reset();
    if (cityName) {
        getCityInfo(cityName); 
        cityInputEl.value = "";
    } else {
        alert("Please enter a City");
    }
    

};

var buttonClickHandler = function(event) {
    getCityInfo(event.target.statusText);

};

var getCityInfo = function(cityName) {
    var dayApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=b2e132f56dc09569a442a9db110b61f5&units=imperial";
    //console.log(cityName);
    fetch(dayApiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    //searchHistory(data.name);
                    displayWeather(data.name, data.coord.lon, data.coord.lat);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Unable to connect to OpenWeather");
        });

};

var displayWeather = function(city, lon, lat) {
    // console.log(city);
    // console.log(lon);
    // console.log(lat);
    
}




formEl.addEventListener("submit", formSubmitHandler);
searchButtonEl.addEventListener("click", buttonClickHandler);