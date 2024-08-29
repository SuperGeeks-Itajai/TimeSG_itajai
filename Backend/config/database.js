const { Sequelize } = require('sequelize');
// Postgress senha notebook 1234 porta 5432
// usuário postgres senha 1234
// Criando uma instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, // Certifique-se de que a porta está correta
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;