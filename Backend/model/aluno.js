const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Historico = require('./historico');
const Modulo = require('./modulo');

class Aluno extends Model {}

Aluno.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moduloAtual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Aluno',
});

Aluno.belongsTo(Modulo, { foreignKey: 'moduloAtual' });
Modulo.hasMany(Aluno, { foreignKey: 'moduloAtual' });

Aluno.hasMany(Historico, { foreignKey: 'alunoId' });
Historico.belongsTo(Aluno, { foreignKey: 'alunoId' });

module.exports = Aluno;
