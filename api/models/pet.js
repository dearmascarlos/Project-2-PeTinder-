const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pet = sequelize.define(
    'pet',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  )

  module.exports = Pet
