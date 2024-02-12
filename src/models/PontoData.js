// src/models/PontoData.js
const mongoose = require("mongoose");
const PontoDataSchema = new mongoose.Schema({
  ponto: String,
  data: String,
  hora: String,
  status: Boolean,
  temp: Number
});
module.exports = mongoose.model("pontos", PontoDataSchema);
