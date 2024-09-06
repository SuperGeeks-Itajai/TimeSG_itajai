const historicoRepository = require('../Repository/historicoRepository');

class HistoricoService {
  async criarHistorico(historicoData) {
    return await historicoRepository.createHistorico(historicoData);
  }

  async obterHistoricoPorId(id) {
    return await historicoRepository.findHistoricoById(id);
  }

  async atualizarHistorico(id, historicoData) {
    return await historicoRepository.updateHistorico(id, historicoData);
  }

  async deletarHistorico(id) {
    return await historicoRepository.deleteHistorico(id);
  }
}

module.exports = new HistoricoService();
