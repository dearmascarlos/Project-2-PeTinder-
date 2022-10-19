const User = require('../api/models/user')
const Pet = require('../api/models/pet')
const Address = require('../api/models/address')
const Breed = require('../api/models/breed')
const Date = require('../api/models/date')




function addRelationsModels() {
    try {
        User.hasMany(Pet)
        Pet.belongsTo(User)

        User.hasOne(Address)
        Address.belongsTo(User)

        Pet.belongsToMany(Pet, {as: 'Friend', through: 'Friends'})

        Breed.hasMany(Pet)
        Pet.belongsTo(Breed)

        Pet.belongsToMany(Date, {through: 'Pet_Dates'})
        Date.belongsToMany(Pet, {through: 'Pet_Dates'})

        Breed.hasMany(Pet)
        Pet.belongsTo(Breed)

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels