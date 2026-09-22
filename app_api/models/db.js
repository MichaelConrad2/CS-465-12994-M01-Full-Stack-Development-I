const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';

const connect = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log(`Mongoose connected to ${dbURI}`);
  } catch (err) {
    console.error('Mongoose connection error:', err);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = async (msg) => {
  await mongoose.connection.close();
  console.log(`Mongoose disconnected through ${msg}`);
  process.exit(0);
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination');
});

process.on('SIGTERM', () => {
  gracefulShutdown('app shutdown');
});

connect();

module.exports = mongoose.connection;