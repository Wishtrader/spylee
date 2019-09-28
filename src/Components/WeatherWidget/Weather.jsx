import React from 'react';
import classes from'./Weather.module.css';

const Weather = (props) => {
  return (
    <div className={classes.weatherWrapper} id="weather">
      <img src='./img/weather.png' alt='weather'></img>
      
    </div>
  );
}

export default Weather;