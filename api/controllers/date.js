const Date = require('../models/date')
const Pet = require('../models/pet')
const User = require('../models/user')

async function createDate(req, res) {
    try {
        const date = await Date.create( req.body, {
            fields: ['meetPoint', 'date']
        })
        const pet1 = await Pet.findByPk(req.body.petId1)
        const pet2 = await Pet.findByPk(req.body.petId2)

        await date.addPet(pet1)
        await date.addPet(pet2)

        return res.status(200).send('Date created!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeAllDates(req, res) {
    try {
        const dates = await Date.findAll({
            include: [{model: Pet}],
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            }
        })

        return res.status(200).json(dates)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeOneDate(req, res) {
    try {
        const date = await Date.findByPk( req.params.id, {
            include: [{model: Pet}],
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            }
        })
        if(date) {
        return res.status(200).json(date)
        } else {
        return res.status(404).send('Date not found')  
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOneDate(req, res) {
    try {
        const [,date] = await Date.update( req.body, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        const data = date[0].dataValues
        if(date) {
            return res.status(200).json({msg: 'Date updated', meetPoint: data.meetPoint, date: data.date})
        } else {
            return res.status(404).send('Date not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneDate(req, res) {
    try {
        const date = await Date.destroy({
            where: {
                id: req.params.id
            }
        })
        return !date ? res.status(404).send('Date not found') : res.status(200).send('Date removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function aceptedDate(req, res) {
    try {
  
       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = { createDate, seeAllDates, seeOneDate, deleteOneDate, updateOneDate, aceptedDate }