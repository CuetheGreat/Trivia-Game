const mongoose = require('mongoose');
require('dotenv').config();

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
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectMongoDB;
