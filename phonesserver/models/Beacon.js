var mongoose = require('mongoose');

var BeaconSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  majorValue: Number,
  minorValue: Number,
});

module.exports = mongoose.model('Beacon', BeaconSchema);
