const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Breed = sequelize.define(
    'breed',
    {
      animal: {
        type: DataTypes.ENUM('cat', 'dog'),
        allowNull: false
      },
      breedName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: {
        type: DataTypes.ENUM('small', 'medium', 'large'),
        allowNull: false
      }
    },
    { timestamps: false }
  )

  module.exports = Breed