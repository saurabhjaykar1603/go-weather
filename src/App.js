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
      {/* <div>
        <div className="container py-2 bg-dark w-50 mt-2">
        <h1 className="text-center text-white">Go Weather {city}</h1>

        </div>
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
      </div> */}
      <div className="text-center content shadow">
                <h1 className="text-center mt-4">Weather App</h1>

                <input type="text" className="shadow input-box" value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />

                <h2 className="mt-5">{weatherData.name}</h2>

               <img src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} /> 

                <h4>Temperature : {(weatherData?.main?.temp - 273).toFixed(2)} °C</h4>

                <p>  Description: {weatherData?.weather && weatherData?.weather[0]?.main} (
          {weatherData?.weather && weatherData?.weather[0]?.description})</p>

                <h5>
                    Visibility : {weatherData?.visibility} meters
                </h5>
              
            </div>

    
    </>
  );
};

export default App;
