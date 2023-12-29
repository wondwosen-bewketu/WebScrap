const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  id: String,
  icon: String,
  name: String,
  symbol: String,
  rank: Number,
  price_usd: Number,
  price_btc: Number,
  volume_usd_24h: Number,
  market_cap_usd: Number,
  percent_change_24h: Number,
  percent_change_1h: Number,
  price_change_1h: Number,
  percent_change_7d: Number,
  price_change_7d: Number,
  percent_change_30d: Number,
  percent_change_90d: Number,
  categoryc: String,
});

const coinsSchema = new mongoose.Schema({
  coins: [coinSchema],
});

const Coins = mongoose.model('Coins', coinsSchema);

module.exports = Coins;
