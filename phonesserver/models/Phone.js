var mongoose = require('mongoose');

var Beacon = new mongoose.Schema({
  majorValue: Number,
  minorValue: Number
});

var PhoneSchema = new mongoose.Schema({
  name: String,
  phoneId: String,
  deviceToken: String,
  currentBeacon: Beacon,
  lastBeacon: Beacon
});

module.exports = mongoose.model('Phone', PhoneSchema);
