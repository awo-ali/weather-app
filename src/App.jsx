import React, { useEffect, useState } from "react";
import "./App.scss";
import Button from "./component/Button/Button";
import { WEATHER_API_URL, WEATHER_API_KEY} from './api';


const App = () => {

  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);

  const getCurrentWeather = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(
          `${WEATHER_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((res) => res.json())
         .then((data) => {
            setCurrentWeather(data);
          });
      });
    
  };

  console.log(currentWeather);

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getForecastWeather = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
       .then((data) => {
          setForecastWeather(data);
        });
    });
  
};

console.log(forecastWeather);

useEffect(() => {
  getForecastWeather();
}, []);

  return (
    <div className="app">
      <h1>Using geolocation JavaScript API in React</h1>
      <Button getCurrentWeather={getCurrentWeather} />
    </div>
  );
};

export default App;
