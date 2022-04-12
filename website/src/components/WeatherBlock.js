import React from 'react';

const WeatherBlock = ({data}) => {
    return (
        <div className="weather-block">
            <img className="weather-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt='Weather icon' />
            <p className="weather-block-title">{new Date(data.dt * 1000).toLocaleDateString('fr')}</p>
            <p className="weather-block-temp">{data.temp.day}° C</p>
        </div>
    );
}

export default WeatherBlock;
