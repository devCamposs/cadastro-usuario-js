const { sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    { // tabela
      codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true
      },
      nome: {
        type: DataTypes.STRING,
        notNull: true
      },
      email: {
        type: DataTypes.STRING,
        notNull: true
      },
      profissao: {
        type: DataTypes.STRING,
        notNull: true
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
