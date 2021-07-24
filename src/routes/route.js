const express = require('express');
const route = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');

route.get('', async (req, res) => {
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a820a5b753e7469ca3e1c6939966cece`);
        res.render('index', {
            articles: encodeURIComponent(JSON.stringify(newsAPI.data))
        });
    } catch (err) {
        res.render('index', {
            articles: null
        })
    }
});


module.exports = route;