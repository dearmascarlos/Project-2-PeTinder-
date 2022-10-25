const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Date = sequelize.define(
    'date',
    {
      meetPoint: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      cancelled: {
        type: DataTypes.ENUM('cancelled', 'acepted'),
        allowNull: false,
        defaultValue: 'cancelled' 
      }
    },
    { timestamps: false }
  )
  
  module.exports = Date
      