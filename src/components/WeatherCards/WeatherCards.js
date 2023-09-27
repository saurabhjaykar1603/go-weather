import React from "react";
import "./WeatherCard.css";

function WeatherCards({ title, description }) {
  return (
    <>
      <div className=" weather-container">
        <div className="container justify-content-justify-content-evenly d-flex flex-column align-item-center ">
          <div className="container mt-3">
            <h2 className="text-center fw-bold ">{title}</h2>
            <p className="fw-bold fs-5">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCards;
