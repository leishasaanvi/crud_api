/*config = {}


config.database = process.env.LOCALHOST_URL


module.exports = config*/

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the users.env file
dotenv.config({ path: path.resolve(__dirname, 'users.env') });

const config = {};

// Assign the environment variable to the database configuration
config.database = process.env.LOCALHOST_URL;

// Export the config object
module.exports = config;
