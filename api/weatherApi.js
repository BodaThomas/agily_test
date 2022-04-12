const axios = require('axios');

export const api = axios.create({
    baseURL: 'http://api.openweathermap.org/',
    params: {
        appid: 'db988691faf182dfc3750cd1e57f3718',
    }
});

export const getCityCoordinates = async (city) => {
    const {data} = await api.get('/geo/1.0/direct', {
        params: {
            q: city,
            limit: '1',
        },
    });

    if (data.length > 0)
        return data[0];
    return null;
}

export const getWeather = async (lat, lon) => {
    const {data} = await api.get('/data/2.5/onecall', {
        params: {
            lat,
            lon,
            units: 'metric',
        },
    });

    return data;
}
