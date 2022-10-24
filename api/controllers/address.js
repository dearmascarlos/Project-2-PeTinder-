const Address = require('../models/address')

async function createOneAddress(req, res) {
    try {
        const address = await Address.create(req.body, {
            fields: ['country', 'city', 'street', 'userId']
        })
        return res.status(200).send('Address created')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeAllAddresses(req, res) {
    try {
        const addresses = await Address.findAll({
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            }, 
        })
        return res.status(200).json(addresses)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function seeOneAddress(req, res) {
    try {
        const address = await Address.findOne({
            where: {
                userId: req.params.userId
            }})
        if(address) {
            return res.status(200).json(address)
        } else {
            return res.status(404).send('Address not found')
        } 
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 

async function updateOneAddress(req, res) {
    console.log('entra');
    try {
        const [,address] = await Address.update(req.params, {
            where: {
                userId: req.params.userId
            }})
        const data = address[0].dataValues
        if(address) {
           return res.status(200).json({msg: 'Address profile updated', country: data.country, city: data.city, street: data.street})
        } else {
           return res.status(404).send('Address not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneAddress(req, res) {
    try {
        const address = await Address.destroy({
            where: {
                userId: req.params.userId
            }
        })
        return !address ? res.status(404).send('Address not found') : res.status(200).send('Address removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
  

module.exports = {createOneAddress, seeAllAddresses, seeOneAddress, updateOneAddress, deleteOneAddress}