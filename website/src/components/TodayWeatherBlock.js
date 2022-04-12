import React from 'react';

const TodayWeatherBlock = ({data}) => {
    console.log(data)
    return (
        <div className="today-weather-block">
            <div className="today-weather-block-header">
                <img className="weather-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png?appid=db988691faf182dfc3750cd1e57f3718`} alt='Weather icon' />
                <h2 className="today-weather-block-header-title">{new Date().toLocaleDateString('fr')}</h2>
            </div>
            <div className="today-weather-block-content">
                <div className="today-weather-block-content-column">
                    <p>Jour - {data.temp.day}° C</p>
                    <p>Nuit - {data.temp.night}° C</p>
                    <p>Humidité - {data.humidity}%</p>
                </div>
                <div className="today-weather-block-content-column">
                    <p>Pression - {data.pressure}hPa</p>
                    <p>Vent - {data.wind_speed} Km/h</p>
                </div>
            </div>
        </div>
    );
}

export default TodayWeatherBlock;
