// src/config/dbConfig.js
const mongoose = require("mongoose");

const dbConfig = "mongodb+srv://gvbus:gvbus@gvbus.hd75ayc.mongodb.net/gvbus?retryWrites=true&w=majority";
const connection = mongoose.connect(dbConfig);

module.exports = connection;
 