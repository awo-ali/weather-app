import React from 'react'
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastList.scss';


const ForecastList = ({forecast}) => {

const forecastArray = (forecast) => {
return forecast.slice(0, 4).map((forecast, index) => (
<ForecastCard
// icon={forecast.weather.icon}
maxTemp={forecast.main ? (forecast.main.temp_max) : ''}
minTemp={forecast.main ? (forecast.main.temp_min) : ''}
icon={forecast.weather ? (forecast.weather[0].icon) : ''}
key={index}
/>
));
}
  return (
    <div className="forecast" forecast={forecast}>
   {forecastArray(forecast)}
    </div>
  );
}

export default ForecastList;
