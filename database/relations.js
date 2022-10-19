// una vez tenga los modelos me los requiero
const User = require('../api/models/user')




function addRelationsModels() {
    try {
        // aqui mas tarde tendre que añadir las relaciones entre las tablas 'modelos'

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels