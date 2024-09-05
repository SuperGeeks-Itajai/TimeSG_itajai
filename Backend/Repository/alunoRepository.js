const Aluno = require('../Model/aluno');

class AlunoRepository {
  async findAll() {
    return await Aluno.findAll();
  }

  async findById(id) {
    return await Aluno.findByPk(id);
  }

  async create(alunoData) {
    return await Aluno.create(alunoData);
  }

  async update(id, alunoData) {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) return null;
    return await aluno.update(alunoData);
  }

  async delete(id) {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) return null;
    return await aluno.destroy();
  }
}

module.exports = new AlunoRepository();
