const User = require('../models/user')
const bcrypt = require('bcrypt')
const Pet = require('../models/pet')
const Address = require('../models/address')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll({
            include: [{model: Address}]})
        if(!users) return res.status(404).send('Users not found')

        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{model: Pet}, {model: Address}]
        })
        
        return !user ? res.status(404).send('User not found') : res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function upDateOneUser(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const [,user] = await User.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        const data = user[0].dataValues
        if (user) {
			return res.status(200).json({ msg: 'Profile updated', name: data.name, age: data.age, email: data.email })
		} else {
			return res.status(404).send('User not found')
		}
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOwnProfile(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const [,user] = await User.update(req.body, {
            returning: true,
            where: {
                id: res.locals.user.id
            }
        })
       return res.status(200).send('Profile Updated!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        return !user ? res.status(404).send('User not found') : res.status(200).send('User removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOwnProfile(req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            include: [{model: Pet}, {model: Address}],
            attributes: {
                exclude: ['password', 'role']
            },
        })
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOwnProfile(req, res) {
    try {
        await User.destroy({
            returning: true,
                where: {
                    id: res.locals.user.id
                }
        })
        res.status(200).send('Profile Removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        return !user ? res.status(404).send('User not found') : res.status(200).send('User removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createOwnPet(req, res) { 
    try {
        const owner = await User.findByPk(res.locals.user.id)
        const newPet = await owner.createPet(req.body, {
            where: {
                userId: res.locals.user.id
            }
        })
        return res.status(200).json({msg: 'Pet Created!', newPet})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createOwnAddress(req, res) { 
    try {
        const user = await User.findByPk(res.locals.user.id)
        const address = await user.createAddress(req.body, {
            where: {
                userId: res.locals.user.id
            }
        })
        return res.status(200).json({msg: 'Address Created!', address})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOwnAddress(req, res) { //no actualiza la Address
    try {
        const owner = await User.findByPk(res.locals.user.id)

        await Address.update(req.body, {
            returning: true,
            where: {
                userId: owner.id
            }
        })
            
            return res.status(200).json({msg: 'Address updated'})
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOwnAddress(req, res) {
    try {
        const owner = await User.findByPk(res.locals.user.id)

        await Address.destroy({
                where: {
                    userId: owner.id
                }
        })
        res.status(200).send('Address Removed')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = { 
    getAllUsers, 
    getOneUser, 
    upDateOneUser, 
    deleteOneUser, 
    getOwnProfile, 
    updateOwnProfile, 
    deleteOwnProfile,
    createOwnPet,
    createOwnAddress,
    updateOwnAddress,
    deleteOwnAddress
}


