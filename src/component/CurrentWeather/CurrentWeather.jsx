import React from "react";
import "./CurrentWeather.scss";
import icon from "../../assets/images/location-icon.png"

const CurrentWeather = ({weather, temp, city}) => {

  return (
    <div className="weather ">
      <div className="weather__location">
        <p className="weather__city">{city} </p>
        <img className="weather__location-icon" src={icon} alt="current location" />
      </div>
      <div className="weather__temperature">{Math.round(temp.temp)}°C </div>
      <div className="weather__range">
        <div> {Math.round(temp.temp_max)}°C/</div>
        <div>{Math.round(temp.temp_min)}°C</div>
      </div>
      <p>{weather.description}</p>
    </div>
  );
};

export default CurrentWeather;
