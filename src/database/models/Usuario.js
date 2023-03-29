const { sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    { // tabela
      codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      profissao: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { // configurações da tabela
      tableName: 'usuarios',
      underscored: true,
      timestamps: false
    }
  )

  return Usuario
}
