import React, { useEffect, useState } from "react";
import "./App.scss";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import DailyWeather from "./component/DailyWeather/DailyWeather";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);

  const getCurrentWeather = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      setCurrentWeather(data);
    });
  };

  console.log(currentWeather.weather ? currentWeather.weather[0].icon : "");

  useEffect(() => {
    getCurrentWeather();
  }, []);

  console.log(currentWeather);

  const getForecastWeather = () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const response = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      setForecastWeather(data.list);
    });
  };

  console.log(forecastWeather);

  useEffect(() => {
    getForecastWeather();
  }, []);

  return (
    <div className="app">
      <DailyWeather weather={currentWeather} />
    </div>
  );
};

export default App;
