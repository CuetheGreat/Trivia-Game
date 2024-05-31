const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connects to the MongoDB database and sets up event listeners for connection status.
 * @throws Will log an error message and exit the process if the connection fails.
 */
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Database');

    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from Database');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Database connection error: ', err);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); 
  }
};

module.exports = connectMongoDB;
