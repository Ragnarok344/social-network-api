const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialApi');

module.exports = mongoose.connection;