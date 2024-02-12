// src/models/PontoLinha.js
const mongoose = require("mongoose");
const PontoLinhaDataSchema = new mongoose.Schema({
  ponto: String,
  linha: {
    numero: String,
    tempo: String,
    localizacao: String
  }
});
module.exports = mongoose.model("pontolinhas", PontoLinhaDataSchema);
