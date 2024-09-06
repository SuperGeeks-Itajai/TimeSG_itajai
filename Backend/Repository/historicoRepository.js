const Historico = require('../Model/historico');

class HistoricoRepository {
  async createHistorico(historicoData) {
    return await Historico.create(historicoData);
  }

  async findHistoricoById(id) {
    return await Historico.findByPk(id);
  }

  async updateHistorico(id, historicoData) {
    const historico = await Historico.findByPk(id);
    if (historico) {
      return await historico.update(historicoData);
    }
    return null;
  }

  async deleteHistorico(id) {
    return await Historico.destroy({ where: { id } });
  }
}

module.exports = new HistoricoRepository();
