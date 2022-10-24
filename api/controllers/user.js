const User = require('../models/user')
const bcrypt = require('bcrypt')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll()

        if(!users) return res.status(404).send('Users not found')

        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
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
        const user = await User.findByPk(res.locals.user.id)
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

module.exports = { getAllUsers, getOneUser, upDateOneUser, deleteOneUser, getOwnProfile, updateOwnProfile, deleteOwnProfile }


