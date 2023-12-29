var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Mongoose schema
const currencyExchangeSchema = new Schema({
  date: String,
  ExchangeRate: [{
  currencyCode: String,
  currencyName: String,
  cashBuying: Number,
  cashSelling: Number,
  transactionalBuying: Number,
  transactionalSelling: Number,}]
});

// Create the Mongoose model
module.exports = mongoose.model('CurrencyExchange', currencyExchangeSchema);