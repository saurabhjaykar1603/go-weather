import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // func for load weatherdata from api
  async function loadWeatherData() {
    const respone = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=6c20b7414d083408cadcb2f16f510ca4`
    );
    setWeatherData(respone.data);
  }

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    loadWeatherData();
  }, [weatherData, setWeatherData]);

  return (
    <>
      <div>
        <h1>Go Weather</h1>
        <p>city : {weatherData?.name}</p>
        <p>Temprature : {(weatherData?.main?.temp - 273).toFixed(2)}°C</p>
        <p>
          Description: {weatherData?.weather && weatherData?.weather[0]?.main} (
          {weatherData?.weather && weatherData?.weather[0]?.description})
        </p>

        <p>Visibility : { weatherData?.visibility } meters</p>
      </div>
    </>
  );
};

export default App;
