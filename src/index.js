function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityNameElement = document.querySelector("#city-name");

  cityNameElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
