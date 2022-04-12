const express = require('express');
const cache = require('node-cache');

const weatherApi = require('./weatherApi');

const app = express();
const port = process.env.PORT || 3000;
const cacheTime = process.env.CACHE_TIME || 60;

app.use(express.json());

// Cache
const myCache = new cache({
    stdTTL: cacheTime,
    checkperiod: cacheTime * 0.2,
    useClones: false
});

// Routes
app.get('/', (_, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const cached = myCache.get(city);

    if (cached) {
        res.json(cached);
    } else {
        const coordinates = await weatherApi.getCityCoordinates(city);

        if (coordinates) {
            const weather = await weatherApi.getWeather(coordinates.lat, coordinates.lon);

            myCache.set(city, weather);
            res.json(weather);
        } else {
            res.status(404).json({
                message: 'City not found'
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Rest Api started on : ${port}`);
});