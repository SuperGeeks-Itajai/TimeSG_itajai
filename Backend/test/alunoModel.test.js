// alunoModel.test.js
const sequelize = require('../config/database');
const Aluno = require('../Model/aluno');
const Modulo = require('../Model/modulo');
const Atividade = require('../Model/atividade');
const Historico = require('../Model/historico');

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sincroniza os modelos com o banco de dados
});

afterAll(async () => {
  await sequelize.close(); // Fecha a conexão com o banco de dados
});

describe('Aluno Model', () => {
  test('Deve criar um Aluno com Modulo e Historico', async () => {
    const modulo = await Modulo.create({ nome: 'Módulo 2', descricao: 'Descrição do Módulo 2' });
    
    const atividade = await Atividade.create({
      nomeAtividade: 'Atividade 2',
      descricao: 'Descrição da Atividade 2',
      moduloId: modulo.id,
    });

    const historico = await Historico.create({
      moduloId: modulo.id,
      atividadesCompletas: [{ nomeAtividade: atividade.nomeAtividade }],
    });

    const aluno = await Aluno.create({
      nome: 'João',
      moduloAtual: modulo.id, // Use o id do módulo aqui
      historicoId: historico.id,
    });

    const aluno2 = await Aluno.create({
      nome: 'Pedro',
      moduloAtual: modulo.id, // Use o id do módulo aqui
      historicoId: historico.id,
    });

    // Busca o aluno criado com o módulo associado
    const alunoComModulo = await Aluno.findOne({
      where: { id: aluno.id },
      include: [{ model: Modulo, as: 'modulo' }],
    });

  });
});
