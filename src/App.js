import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  // city

  const [city, setCity] = useState("pune");

  // func for load weatherdata from api
  async function loadWeatherData() {
    try{
     const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c20b7414d083408cadcb2f16f510ca4`
      );
      setWeatherData(response.data);
    }
    catch(error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    loadWeatherData();
  }, );

  useEffect(() => {
    loadWeatherData();
  }, [city]);

  return (
    <>
      <div>
        <h1>Go Weather {city}</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <p>city : {weatherData?.name}</p>
        <p>Temprature : {(weatherData?.main?.temp - 273).toFixed(2)}°C</p>
        <p>
          Description: {weatherData?.weather && weatherData?.weather[0]?.main} (
          {weatherData?.weather && weatherData?.weather[0]?.description})
        </p>

        <p>Visibility : {weatherData?.visibility} meters</p>
      </div>
    </>
  );
};

export default App;
