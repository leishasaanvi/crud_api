
/*
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

// Import and configure routes
const userRoutes = require('./app/users.routes.js');
app.use('/api/users', userRoutes);


// Connect to the database
mongoose.connect("mongodb+srv://leishasaanvi:gn7f6mGxlDQC3axk@workspacedb.wiwgp.mongodb.net/?retryWrites=true&w=majority&appName=WorkspaceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connection established!'))
.catch(err => console.error('Database connection failed!', err));

// Test route
app.get('/', (req, res) => {
    res.send('<h1>CRUD API</h1>');
});

const port = 3000;

app.listen(port, () => console.log(`Server is running at ${port}!`));
*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

// Import and configure user routes
const userRoutes = require('./app/users.routes.js');
app.use('/api/users', userRoutes);

// Route for fetching jokes
app.get('/api/jokes', (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.chucknorris.io/jokes/random',
        headers: { }
    };

    axios.request(config)
    .then((response) => {
        res.status(200).json(response.data);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Unable to fetch joke!");
    });
});

// Connect to the database
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connection established!'))
.catch(err => console.error('Database connection failed!', err));

// Test route
app.get('/', (req, res) => {
    res.send('<h1>CRUD API with Jokes</h1>');
});

const port = 3000;

app.listen(port, () => console.log(`Server is running at ${port}!`));



