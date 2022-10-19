// una vez tenga los modelos me los requiero
const User = require('../api/models/user')
const Pet = require('../api/models/pet')
const Address = require('../api/models/address')
const Breed = require('../api/models/breed')
const Date = require('../api/models/date')




function addRelationsModels() {
    try {
        // aqui mas tarde tendre que añadir las relaciones entre las tablas 'modelos'

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels