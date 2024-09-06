const moduloRepository = require('../Repository/moduloRepository');

class ModuloService {
  async criarModulo(moduloData) {
    return await moduloRepository.createModulo(moduloData);
  }

  async obterModuloPorId(id) {
    return await moduloRepository.findModuloById(id);
  }

  async atualizarModulo(id, moduloData) {
    return await moduloRepository.updateModulo(id, moduloData);
  }

  async deletarModulo(id) {
    return await moduloRepository.deleteModulo(id);
  }
}

module.exports = new ModuloService();
