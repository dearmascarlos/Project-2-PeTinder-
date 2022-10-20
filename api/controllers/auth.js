const User = require('../models/user')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signUp(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create(req.body, {
            fields: ['name', 'age', 'email', 'password']
        })
        
        const payload = {email: user.email}
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '3h'})

        return res.status(200).json({msg: 'User Created!', token: token })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) return res.status(401).send('Password or Email not correct')
        bcrypt.compare(req.body.password, user.password, (error, result) => {
            if(error) return res.status(500).send(error)
            if(!result) return res.status(401).send('Password or Email not correct')

            const payload = {email: user.email}
            const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '3h'})

            return res.status(200).json({msg:'Successful login', token: token })
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { 
    signUp,
    login
}