const Ponto = require('../models/PontoData')

module.exports = {
  async read(request, response) {
    const pontoList = await Ponto.find();
    return response.json(pontoList);
  },
  async create(request, response) {
    const { ponto, data, hora, status, temp } = request.body;
    if (!ponto) {
      return response.status(400).json({ error: "Numero do ponto nao informado." });
    }
    const pontoCreated = await Ponto.create(request.body);
    return response.json(pontoCreated);
  },
  async delete(request, response) {
    const { id } = request.params;
    const pontoDelete = await Ponto.findOneAndDelete({ ponto: id });
    if (pontoDelete) {
      return response.json(pontoDelete);
    }
    return response.status(400).json({ error: "Nenhum registro encontrado." });
  }
};