var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Mongoose schema
const WeatherSchema = new Schema({
  city: String,
  weather: [{
  date: String,
  min: Number,
  max: Number,
 }]
});

// Create the Mongoose model
module.exports = mongoose.model('weather', WeatherSchema);