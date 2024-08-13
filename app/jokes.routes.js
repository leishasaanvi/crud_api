const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch a random joke
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

module.exports = router;