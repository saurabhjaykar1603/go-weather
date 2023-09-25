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

  const [weatherdata, setWeatherData] = useState({});

  useEffect(() => {
    loadWeatherData();
  }, [weatherdata, setWeatherData]);

  return (
    <>
      <h1>Go Weather</h1>
    </>
  );
};

export default App;
