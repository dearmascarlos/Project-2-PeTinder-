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

module.exports = { getAllUsers }


