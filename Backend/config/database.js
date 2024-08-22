const { Sequelize } = require('sequelize');

// Criando uma instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // Usando PostgreSQL como banco de dados
  logging: false, // Desabilita o log de SQL no console
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Testando a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
