const Pet = require('../models/pet')
const User = require('../models/user')
const Date = require('../models/date')
const { Op } = require('sequelize')

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

async function addOwnFriend(req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)
        if(res.locals.user.role === 'admin'){
            try {
                const pet = await Pet.findByPk(req.params.id)
                const friend = await Pet.findByPk(req.params.friendId)
        
                await pet.addFriend(friend)
                await friend.addFriend(pet)
                return res.status(200).send('Friend Added')
            } catch (error) {
                return res.status(500).send(error.message)
            }
        } else {
            const myPet = await owner.getPets({
                where: {
                    id: req.params.id
                }
            })
            if(myPet <= 0) {
                res.status(404).send('Not found in your pets')
            } else {
                const pet = await Pet.findByPk(req.params.id)
                const friend = await Pet.findByPk(req.params.friendId)

                await pet.addFriend(friend)
                await friend.addFriend(pet)
                return res.status(200).send('Friend Added')
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeAllOwnFriends(req, res) {
    try {
        const pets = await Pet.findAll({
            where: {
                userId: res.locals.user.id
            }, 
            include: [{model: Pet, as: 'Friend'}]
        })

        if(pets <= 0) {
            return res.status(404).send(`Not pets`)
        } else {
           
            return res.status(200).json(pets)
        }
    } catch (error) {
        return res.status(500).send(error.menssage)
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
            return res.status(200).json({msg: 'Pet profile updated', name: data.name, age: data.age, gender: data.gender, breedId: data.breedId, userId: data.userId})
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

async function createOwnPetDate(req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const pet = await owner.getPets({
            where: {
                id: req.params.petId
            }
        })
        if(pet <= 0) {
            res.status(404).send('Not found in your pets')
        } else {
            const date = await Date.create( req.body, {
                fields: ['meetPoint', 'date']
            })
            const pet1 = await Pet.findByPk(req.params.petId)
            const pet2 = await Pet.findByPk(req.body.petId2)

            await date.addPet(pet1)
            await date.addPet(pet2)

            return res.status(200).send('Date created!')
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeOwnPetDates (req, res) {
    try {
        if (Object.keys(req.query)[0] === 'date') {
            const date = Object.values(req.query)[0]
            const pet = await Pet.findByPk(req.params.id, {
                include: [{model: Date}]
            })
            const result = pet.dates.filter(data => {
                const day = data.dataValues.date
                const query = date.split('-')
                const array = [day.getFullYear(), day.getMonth(), day.getDate()]
                return array[0] > query[0] || (array[0] == query[0] && array[1] > query[1]) || (array[0] == query[0] && array[1] == query[1] && array[2] >= query[2])
            })
            
            if(result.length === 0) {
                res.status(404).send('Date not found')
            } else {
                res.status(200).json(result)
            }
        } else {
            const owner = await User.findByPk(res.locals.user.id)
            const pet = await owner.getPets({
                include: [{model: Date}],
                where: {
                    id: req.params.id
                }
            })
            if(pet <= 0) {
                res.status(404).send('Not found in your pets')
            } else {
                res.status(200).json(pet)
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { 
    createPet, 
    seeAllPets, 
    seeOnePet, 
    addOwnFriend, 
    updateOnePet, 
    deleteOnePet,
    getOwnPetsProfile,
    getOwnPet,
    deleteOwnPetProfile,
    updateOwnPetProfile,
    createOwnPetDate,
    seeOwnPetDates,
    seeAllOwnFriends
}