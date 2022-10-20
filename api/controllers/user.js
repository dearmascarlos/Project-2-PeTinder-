const User = require('../models/user')

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
        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (user) {
			return res.status(200).json({ msg: 'Profile updated', user: user })
		} else {
			return res.status(404).send('User not found')
		}
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


module.exports = { getAllUsers, getOneUser, upDateOneUser, deleteOneUser }


