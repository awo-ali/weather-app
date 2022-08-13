import React, { useEffect, useState } from "react";
import "./App.scss";
import Button from "./component/Button/Button";

const App = () => {

  const [weather, setWeather] = useState([]);

  const getWeather = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=23e2d9191ae9c18f66d5ef2ebd1225f7`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);
          });
      });
    
  };

  console.log(weather);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="app">
      <h1>Using geolocation JavaScript API in React</h1>
      <Button getWeather={getWeather} />
    </div>
  );
};

export default App;
