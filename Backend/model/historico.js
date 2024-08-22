const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Historico extends Model {}

Historico.init({
  atividadesCompletas: {
    type: DataTypes.JSONB, // Pode armazenar dados complexos como uma lista de atividades completas
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Historico',
});

module.exports = Historico;
