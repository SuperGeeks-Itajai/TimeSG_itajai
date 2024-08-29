const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Atividade = require('./atividade');

class Modulo extends Model {}

Modulo.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Modulo',
});

Modulo.hasMany(Atividade, { foreignKey: 'moduloId' });
Atividade.belongsTo(Modulo, { foreignKey: 'moduloId' });

module.exports = Modulo;

