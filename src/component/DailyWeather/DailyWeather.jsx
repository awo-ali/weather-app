import React from "react";
import moment from "moment";
import "./DailyWeather.scss";

const DailyWeather = ({ weather }) => {
  return (
    <div className="dailyWeather">
      <div className="weather">
        <div>{weather ? weather.name : ""} </div>
        <p> {moment().format("ddd, MMM Do YYYY")}</p>
        <div className="weather__temp">
          <div className="weather__celcius">
            {weather.main ? Math.round(weather.main.temp) : ""}°C
          </div>
          <img
            className="weather__icon"
            src={
              weather.weather
                ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                : ""
            }
            alt="weather icon"
          />
        </div>
        <div>{weather.weather ? weather.weather[0].description : ""}</div>
      </div>
      <div className="stats">
        <div className="stats__row">
          <span>Feels Like </span>
          <span>
            {" "}
            {weather.main ? Math.round(weather.main.feels_like) : ""} °C{" "}
          </span>
        </div>
        <div className="stats__row">
          <span>Humidity </span>
          <span>{weather.main ? Math.round(weather.main.humidity) : ""} %</span>
        </div>
        <div className="stats__row">
          <span>Max Temp </span>
          <span>{weather.main ? Math.round(weather.main.temp_max) : ""}°C</span>
        </div>
        <div className="stats__row">
          <span>Min Temp</span>
          <span>
            {" "}
            {weather.main ? Math.round(weather.main.temp_min) : ""} °C
          </span>
        </div>
        <div className="stats__row">
          <span>Sunrise</span>
          <span>
            {" "}
            {weather.main
              ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
              : ""}
          </span>
        </div>
        <div className="stats__row">
          <span>Sunset</span>
          <span>
            {weather.main
              ? new Date(weather.sys.sunset * 1000).toLocaleTimeString()
              : ""}
          </span>
        </div>
        <div className="stats__row">
          <span>Country</span>
          <span>{weather.main ? weather.sys.country : ""}</span>
        </div>
        <div className="stats__row">
          <span>Wind Speed </span>
          <span>
            {weather.wind ? Math.floor((weather.wind.speed * 18) / 5) : ""}{" "}
            km/hr
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
