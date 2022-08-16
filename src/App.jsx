import React, { useEffect, useState } from "react";
import "./App.scss";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import CurrentWeather from "./component/CurrentWeather/CurrentWeather";
import ThreeHourForecast from "./component/ThreeHourForecast/ThreeHourForecast";
import ForecastList from "./component/ForecastList/ForecastList";
// import ForecastCard from "./component/ForecastCard/ForecastCard";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);
  const [currentWeatherMain, setCurrentWeatherMain] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);


  const getCurrentWeather = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      setCurrentWeather(data.weather[0]);
      setCurrentWeatherMain(data.main);
      setCurrentCity(data.name);
    });
  };

  console.log(currentWeather);

  useEffect(() => {
    getCurrentWeather();
  }, []);

  console.log(currentWeatherMain);
  console.log(currentCity);

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
      <h1>Welcome to weatherly !!!</h1>
      {currentWeather && (
        <CurrentWeather
          weather={currentWeather}
          temp={currentWeatherMain}
          city={currentCity}
        />
      )}
      <ThreeHourForecast />
      {/* <ForecastCard forecast={forecastWeather}/> */}
      <ForecastList forecast={forecastWeather} />
    </div>
  );
};

export default App;
