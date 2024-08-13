/*config = {}


config.database = process.env.LOCALHOST_URL


module.exports = config*/

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the users.env file
dotenv.config();
console.log(`${process.env.MONGO_CONNECTION_STRING}`)
const config = {};

// Assign the environment variable to the database configuration

config.database = process.env.MONGO_CONNECTION_STRING;
console.log("Config:", config.database)

// Export the config object
module.exports = config;
