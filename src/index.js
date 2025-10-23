function refreshWeatherData(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityNameElement = document.querySelector("#city-name");

  cityNameElement.innerHTML = response.data.city;
}

function getWeatherData(city) {
  let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeatherData);
}

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  getWeatherData(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

getWeatherData("London");
