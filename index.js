require('dotenv').config()

const { checkConnection, syncModels } = require('./database')
const addRelationsModels = require('./database/relations')

const express = require('express')
const morgan = require('morgan')

async function checkAndSyncDB() {
    await checkConnection()
    addRelationsModels()
    //await syncModels()
}

function runAndListenExpress() {
    const app = express()
        app.use(morgan('dev'))
        app.use(express.json())
        app.use('/api', require('./api/routes'))
        app.listen(process.env.PORT, () => {
            console.log('Listening on PORT: ' + process.env.PORT)
        })
}

(async function startApi() {
    await checkAndSyncDB()
    runAndListenExpress()
})()