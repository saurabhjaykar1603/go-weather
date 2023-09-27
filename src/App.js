import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeatherCards from "./components/WeatherCards/WeatherCards";

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  // city

  const [city, setCity] = useState("pune");

  // func for load weatherdata from api
  async function loadWeatherData() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0405d3c38f14f5a2f80d54d0f9357a7f`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadWeatherData();
  }, [city]);

  return (
    <>
      <div className="text-center content shadow">
        <h1 className="text-center mt-4 fw-bold">
          {" "}
          Go Weather App <i class="fa-solid fa-cloud-moon-rain fa-bounce"></i>{" "}
        </h1>

        <input
          type="text"
          className="shadow input-box"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <h1 className="mt-5 fw-bold ">{weatherData.name}</h1>

        {/* <p>
          {" "}
          Description: {weatherData?.weather && weatherData?.weather[0]?.main} (
          {weatherData?.weather && weatherData?.weather[0]?.description})
        </p> */}

        <section className="d-flex justify-content-evenly align-content-center mt-5">
          <WeatherCards
            title={"Temp"}
            description={`${(weatherData?.main?.temp - 273).toFixed(2)} °C`}
          />
          <WeatherCards
            title={"Visibility"}
            description={`${weatherData?.visibility} meters`}
          />
          <WeatherCards
            title={"Description"}
            description={`${
              weatherData?.weather && weatherData?.weather[0]?.main
            } 
          ${weatherData?.weather && weatherData?.weather[0]?.description}`}
          />
        </section>

          <h2 className="text-center fw-bold">  Read the Sky Before You Fly 😶‍🌫️</h2>
      

      
      </div>
    </>
  );
};

export default App;
