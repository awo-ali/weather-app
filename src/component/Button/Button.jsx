import React from 'react'
import './Button.scss';


const Button = ({getWeather}) => {


  return (
    <div className="Button">
   <button onClick={getWeather}>Get Location</button>
    </div>
  );
}

export default Button;
