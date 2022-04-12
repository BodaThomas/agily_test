import React from 'react'
import { TodayWeatherBlock, BackButton, WeatherBlock } from '../components';

const WeatherView = ({
    city,
    setCity,
    setWeather,
    weather
}) => {
    return (
        <div className="weather-view">
            <div className="weather-view-header">
                <BackButton onClick={() => {
                    setCity(null);
                    setWeather(null);
                }} />
            </div>
            <div className="weather-view-content">
                <TodayWeatherBlock data={weather.daily[0]} />
                <div className="weather-view-content-column">
                    {weather.daily.slice(1).map(day => (
                        <WeatherBlock key={day.dt} data={day} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WeatherView;
