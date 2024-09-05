// aluno.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Historico = require('./historico');
const Modulo = require('./modulo');

class Aluno extends Model {}

Aluno.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moduloAtual: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Modulo,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Aluno',
});

Aluno.belongsTo(Modulo, { foreignKey: 'moduloAtual', as: 'modulo' });
Modulo.hasMany(Aluno, { foreignKey: 'moduloAtual' });

Aluno.hasMany(Historico, { foreignKey: 'alunoId' });
Historico.belongsTo(Aluno, { foreignKey: 'alunoId' });

module.exports = Aluno;
