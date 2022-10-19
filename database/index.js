const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
} )

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection to DataBase successfully')
    } catch (error) {
        throw error
    }
}

async function syncModels() {
    try {
        await sequelize.sync()
        console.log('All models synchronized successfully')
    } catch (error) {
        throw error
    }
}

module.exports = { sequelize, checkConnection, syncModels }