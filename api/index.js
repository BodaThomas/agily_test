const express = require('express');
const cache = require('node-cache');
const axios = require('axios');

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

app.listen(port, () => {
    console.log(`Rest Api started on : ${port}`);
});