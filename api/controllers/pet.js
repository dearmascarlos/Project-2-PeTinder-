const Pet = require('../models/pet')

async function createPet(req, res) {
    try {
        const pet = await Pet.create( req.body, {
            fields: ['name', 'age', 'gender', 'friend', 'userId']
        })
        return res.status(200).send('Pet created!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeAllPets(req, res) {
    try {
        const pets = await Pet.findAll()
        return res.status(200).json(pets)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}






module.exports = { createPet, seeAllPets }