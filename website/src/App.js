import React, {useEffect, useState} from 'react';
import './App.css';
import {HomepageView, WeatherView} from './views'

import {getCityCoordinates, getWeather} from './api';

function App() {
  const [city, setCity] = useState('Paris');
  const [weather, setWeather] = useState(null);

  console.log(weather);
  useEffect(() => {
    if (city) {
      getCityCoordinates(city)
        .then(data => getWeather(data.lat, data.lon))
        .then(setWeather);
    }
  }, [city]);

  return (
    weather ?
      <WeatherView setCity={setCity} city={city} setWeather={setWeather} weather={weather} /> :
      <HomepageView city={city} setCity={setCity} />
  );
}

export default App;
