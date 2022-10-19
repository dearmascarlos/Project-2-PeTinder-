const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Address = sequelize.define(
    'address',
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Address