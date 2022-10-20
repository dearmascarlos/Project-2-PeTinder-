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
        const pets = await Pet.findAll({
            include: [{model: Pet, as: 'Friend'}], 
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            },
            
        })
        return res.status(200).json(pets)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function addFriend(req, res) {
    try {
        const pet = await Pet.findByPk(req.params.petId)
        const friend = await Pet.findByPk(req.params.friendId)

        await pet.addFriend(friend)
        await friend.addFriend(pet)
        return res.status(200).send('Friend Added')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = { createPet, seeAllPets, addFriend }