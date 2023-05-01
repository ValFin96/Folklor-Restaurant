const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/folklor-restaurant');

module.exports = mongoose.connection;