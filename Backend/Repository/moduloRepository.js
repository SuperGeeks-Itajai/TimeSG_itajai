const Modulo = require('../Model/modulo');

class ModuloRepository {
  async createModulo(moduloData) {
    return await Modulo.create(moduloData);
  }

  async findModuloById(id) {
    return await Modulo.findByPk(id);
  }

  async updateModulo(id, moduloData) {
    const modulo = await Modulo.findByPk(id);
    if (modulo) {
      return await modulo.update(moduloData);
    }
    return null;
  }

  async deleteModulo(id) {
    return await Modulo.destroy({ where: { id } });
  }
}

module.exports = new ModuloRepository();
