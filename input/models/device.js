const mongoose = require('mongoose');

module.exports = mongoose.model('recpdata', new mongoose.Schema({
  id: String,
  password: String
}, { collection : 'RecpData' }));