const Breed = require('../models/breed')

async function createOneBreed(req, res) {
    try {
        const pet = await Breed.create( req.body, {
            fields: ['animal', 'breedName', 'size']
        })
        return res.status(200).send('Breed created!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeAllBreeds(req, res) {
    try {
        const breeds = await Breed.findAll({
            //include: [{model: Breed, as: ''}], 
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            },
            
        })
        return res.status(200).json(breeds)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeOneBreed(req, res) {
    try {
        const breed = await Breed.findByPk(req.params.id, { 
           //podemos con el include ver los pets de esta breed? 
           //include: [{model: breed, as: 'petId'}], 
        })
        if(breed) {
        return res.status(200).json(breed)
        } else {
        return res.status(404).send('Breed not found')  
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOneBreed(req, res) {
    try {
        const [,breed] = await Breed.update(req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        const data = breed[0].dataValues
        if(breed) {
            return res.status(200).send('Breed updated')
        } else {
            return res.status(404).send('Breed not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneBreed(req, res) {
    try {
        const breed = await Breed.destroy({
            where: {
                id: req.params.id
            }
        })
        return !breed ? res.status(404).send('Breed not found') : res.status(200).send('Breed removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { createOneBreed, seeAllBreeds, seeOneBreed, updateOneBreed, deleteOneBreed }