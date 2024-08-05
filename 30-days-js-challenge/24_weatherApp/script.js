// fetching the data from OpenWeatherMap
let apiKey = "ce81d71ef84a6c9940a141c72f07a3b9";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metrics&q=";

const fiveDayURL =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const cityInput = document.querySelector("#searchCity");
const searchCityButton = document.querySelector("#searchCityButton");
const temperaturValue = document.querySelector(".temp");
const updateCityName = document.querySelector(".city");
const weatherImage = document.querySelector("#weatherImage");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey} `);
  var data = await response.json();
  console.log(data);
  let defaultCityName = data.name;
  console.log(defaultCityName);
  let temperature = Math.floor(data.main.temp - 273.15) + `°C`;
  console.log(temperature);
  temperaturValue.textContent = temperature;

  updateCityName.textContent = defaultCityName;
  const weatherName = document.querySelector("#weatherType");

  const weatherType = data.weather[0].main;
  if (weatherType === "Clouds") {
    weatherImage.src = "images/cloudy.png";
    weatherName.textContent = weatherType;
  } else if (weatherType === "Rain") {
    weatherImage.src = "images/rainy.png";
    weatherName.textContent = weatherType;
  } else {
    weatherImage.src = "images/cloudy.png";
    weatherName.textContent = weatherName.value;
  }
  console.log(weatherType);

  const fiveDayResponse = await fetch(fiveDayURL + city + `&appid=${apiKey} `);

  const fiveDayJSOn = await fiveDayResponse.json();

  console.log(fiveDayJSOn);
}

checkWeather("raipur");

searchCityButton.addEventListener("click", () => {
  const getCityName = cityInput.value;
  checkWeather(getCityName);
});
