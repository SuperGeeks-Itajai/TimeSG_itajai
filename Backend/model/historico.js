const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Historico extends Model {}

Historico.init({
  atividadesCompletas: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  alunoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Alunos', // ou 'Aluno' dependendo do nome da tabela
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Historico',
});

module.exports = Historico;
