const alunoRepository = require('../Repository/alunoRepository');

class AlunoService {
  async getAllAlunos() {
    return await alunoRepository.findAll();
  }

  async getAlunoById(id) {
    return await alunoRepository.findById(id);
  }

  async createAluno(alunoData) {
    return await alunoRepository.create(alunoData);
  }

  async updateAluno(id, alunoData) {
    return await alunoRepository.update(id, alunoData);
  }

  async deleteAluno(id) {
    return await alunoRepository.delete(id);
  }
}

module.exports = new AlunoService();
