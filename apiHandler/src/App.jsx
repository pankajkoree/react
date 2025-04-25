import { useState } from "react";

function App() {
  const weatherData = {
    mumbai: {
      temperature: 32.4,
      humidity: "high",
    },
    delhi: {
      temperature: 34.2,
      humidity: "medium",
    },
    "naya delhi": {
      temperature: 33.8,
      humidity: "low",
    },
    bangalore: {
      temperature: 28.5,
      humidity: "high",
    },
    chennai: {
      temperature: 31.0,
      humidity: "very high",
    },
    kolkata: {
      temperature: 30.7,
      humidity: "high",
    },
    hyderabad: {
      temperature: 29.6,
      humidity: "medium",
    },
    jaipur: {
      temperature: 35.1,
      humidity: "low",
    },
    pune: {
      temperature: 27.3,
      humidity: "medium",
    },
    lucknow: {
      temperature: 33.0,
      humidity: "medium",
    },
    ahmedabad: {
      temperature: 34.5,
      humidity: "low",
    },
    surat: {
      temperature: 31.6,
      humidity: "medium",
    },
    goa: {
      temperature: 29.9,
      humidity: "very high",
    },
    chandigarh: {
      temperature: 28.0,
      humidity: "low",
    },
    patna: {
      temperature: 32.0,
      humidity: "high",
    },
  };

  const [city, setCity] = useState("");
  const [data, setData] = useState({
    city: "",
    temperature: "",
    humidity: "",
  });
  const getInfo = (e) => {
    e.preventDefault();

    const allCities = Object.keys(weatherData);

    if (allCities.includes(city)) {
      setData({
        city,
        temperature: weatherData[city].temperature,
        humidity: weatherData[city].humidity,
      });
    } else {
      console.log("city not found");
    }
  };

  return (
    <>
      <form onSubmit={getInfo}>
        <label htmlFor="city">Enter the city: </label>
        <input
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          required
        />
        <button type="submit">Get info</button>
      </form>

      {data.city != "" ? (
        <div>
          <p>City : {data.city} </p>
          <p>Temperature : {data.temperature}</p>
          <p>Humidity : {data.temperature}</p>
        </div>
      ) : (
        <div>
          <h1>City not found</h1>
        </div>
      )}
    </>
  );
}

export default App;
