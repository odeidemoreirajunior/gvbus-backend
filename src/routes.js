const express = require("express");

const routes = express.Router();

const PontoController = require("./controllers/PontoController");

const  PontoLinhaController = require("./controllers/PontoLinhaController");

routes.post("/ponto", PontoController.create);
routes.get("/ponto", PontoController.read);
routes.get("/pontolinha", PontoLinhaController.read);
routes.get("/pontolinha/:id", PontoLinhaController.read);
routes.delete("/ponto/:id", PontoController.delete);

module.exports = routes;