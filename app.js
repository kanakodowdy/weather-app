function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidity = Math.round(response.data.main.humidity);
  humidityElement.innerHTML = `Humidity : ${humidity}%`;
  let windElement = document.querySelector("#wind");
  wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `Wind : ${wind}Km/h`;
}

let apiKey = "7e9cd1252a8ce0c8d0de0776fa7e9fac";
let unit = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayTemperature);
