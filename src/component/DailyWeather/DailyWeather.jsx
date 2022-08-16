import React from "react";
import "./DailyWeather.scss";
import icons from "../../assets/images/09d.png";


const DailyWeather = ({ weather, temp, city, wind, sys }) => {
  return (
    <div className="dailyWeather">
      <div className="weather">
        <div>{city}</div>
        <div>Tues, 16 Aug</div>
        <div className="weather__temp">
          <div className="weather__celcius">{Math.round(temp.temp)}°C</div>
          <img className="weather__icon" src={icons} alt="weather icon" />
        </div>
        <div>{weather.description}</div>
      </div>

      <div className="stats">
        <div className="stats__row">
          <span>Feels Like </span>
          <span> {Math.round(temp.feels_like)}°C </span>
        </div>
        <div className="stats__row">
          <span>Humidity </span>
          <span>{temp.humidity} %</span>
        </div>
        <div className="stats__row">
          <span>Max Temp </span>
          <span>{Math.round(temp.temp_max)}°C</span>
        </div>
        <div className="stats__row">
          <span>Min Temp</span>
          <span> {Math.round(temp.temp_min)}°C</span>
        </div>
        <div className="stats__row">
          <span>Sunrise</span>
          <span> {new Date(sys.sunrise * 1000).toLocaleTimeString()}</span>
        </div>
        <div className="stats__row">
          <span>Sunset</span>
          <span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</span>
        </div>
        <div className="stats__row">
          <span>Country</span>
          <span>{sys.country}</span>
        </div>
        <div className="stats__row">
          <span>Wind Speed </span>
          <span>{Math.floor((wind.speed *18)/5)} km/hr</span>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
