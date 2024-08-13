/*
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
module.exports = config;*/


const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Log the MongoDB connection string to ensure it's loaded correctly
console.log(`MongoDB Connection String: ${process.env.MONGO_CONNECTION_STRING}`);

const config = {
  database: process.env.MONGO_CONNECTION_STRING
};

// Log the config object to ensure it's correctly assigned
console.log("Config:", config.database);

// Export the config object
module.exports = config;
