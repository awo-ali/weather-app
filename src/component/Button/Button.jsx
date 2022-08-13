import React from 'react'
import './Button.scss';


const Button = () => {

    // const handleClick = () => {
    //     setFetching()
    //     getCurrentLocationData()
    // }

    const getCurrentLocationData = () => {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(position => {
        //         let latitude = position.coords.latitude
        //         let longitude =  position.coords.longitude
        //         setLocation({position: {latitude, longitude}})
        //         getWeatherData(latitude, longitude)
        //     })
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
            });
        }   
    }

  return (
    <div className="Button">
   <button onClick={getCurrentLocationData}>Get Location</button>
    </div>
  );
}

export default Button;
