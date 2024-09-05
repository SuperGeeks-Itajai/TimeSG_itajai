const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

class Atividade extends Model {}

Atividade.init({
  nomeAtividade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Atividade',
});

module.exports = Atividade;
