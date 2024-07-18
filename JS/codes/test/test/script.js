const weatherForecast = () => {
  let url = `https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "eb707d11e0msh8259de69d8e79f9p1528fejsn5631e93ae6b7"
  );
  xhr.setRequestHeader("x-rapidapi-host", "yahoo-weather5.p.rapidapi.com");

  xhr.onload = () => {
    let forecastData = JSON.parse(this.responseText)
    console.log(forecastData);
  }
xhr.send()
};

weatherForecast()