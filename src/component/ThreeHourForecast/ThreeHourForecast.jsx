import React from 'react'
import './ThreeHourForecast.scss';
import cloudySun from "../../assets/images/02d.png"

const ThreeHourForecast = () => {


  return (
    <div className="threeHourForecast">
   <div>03:00</div>
   <div className='threeHourForecast__temp'>
   <img className='threeHourForecast__icon' src={cloudySun} alt="icon" />
   <div>20°C</div>
   </div>

    </div>
  );
}

export default ThreeHourForecast;