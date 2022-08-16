import React from "react";
import "./ForecastCard.scss";
// import sun from "../../assets/images/01d.png"

const ForecastCard = (props) => {
    const {icon, maxTemp, minTemp } = props
  return (
    <div className="forecast">
      <div className="forecast__date">
        <div>Mon,</div>
        <div>15 Aug</div>
        <img className="forecast__icon date" src={icon} alt="" />
      </div>
    
      <div className="forecast__temp">
        <div>{Math.round(maxTemp)}/</div>
        <div>{Math.round(minTemp)}°C</div>
      </div>
    </div>
  );
};

export default ForecastCard;
