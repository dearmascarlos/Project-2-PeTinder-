const Pet = require('../models/pet')
const User = require('../models/user')

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

async function seeOnePet(req, res) {
    try {
        const pet = await Pet.findByPk(req.params.id, { 
            include: [{model: Pet, as: 'Friend'}], 
        })
        if(pet) {
        return res.status(200).json(pet)
        } else {
        return res.status(404).send('Pet not found')  
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function addFriend(req, res) { // Esto asi seria una funcion de admin, para que sea para un user tenemos que permitirlo solo si es dueño de al menos uno
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

async function updateOnePet(req, res) {
    try {
        const [,pet] = await Pet.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        const data = pet[0].dataValues
        if(pet) {
            return res.status(200).json({msg: 'Pet profile updated', name: data.name, age: data.age, gender: data.gender, userId: data.userId})
        } else {
            return res.status(404).send('Pet not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOnePet(req, res) {
    try {
        const pet = await Pet.destroy({
            where: {
                id: req.params.id
            }
        })
        return !pet ? res.status(404).send('Pet not found') : res.status(200).send('Pet removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOwnPetsProfile(req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const pets = await owner.getPets()

        return res.status(200).json(pets)
        
        
    } catch (error) {
        return res.status(500).send(error.menssage)
    }
}

async function getOwnPet (req, res) { 
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const pet = await owner.getPets({
            where: {
                id: req.params.id
            }
        })
        if(pet <= 0) {
            res.status(404).send('Not found in your pets')
        } else {
            res.status(200).json(pet)
        }
    } catch (error) {
        return res.status(500).send(error.menssage)
    }
}

async function updateOwnPetProfile(req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const pet = await owner.getPets({
            where: {
                id: req.params.id
            }
        })

        if(pet <= 0) {
            res.status(404).send('Not found in your pets')
        } else {
            const [,pet] = await Pet.update(req.body, {
                returning: true,
                where: {
                    id: req.params.id
                }
            })
            const data = pet[0].dataValues
            return res.status(200).json({msg: 'Pet profile updated', name: data.name, age: data.age, gender: data.gender, userId: data.userId})
        } 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOwnPetProfile (req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const pet = await owner.getPets({
            where: {
                id: req.params.id
            }
        })
        if(pet <= 0) {
            res.status(404).send('Not found in your pets')
        } else {
            await Pet.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Pet removed')
        } 
            
    } catch (error) {
        return res.status(500).send(error.menssage)
    }
}



module.exports = { 
    createPet, 
    seeAllPets, 
    seeOnePet, 
    addFriend, 
    updateOnePet, 
    deleteOnePet,
    getOwnPetsProfile,
    getOwnPet,
    deleteOwnPetProfile,
    updateOwnPetProfile
}