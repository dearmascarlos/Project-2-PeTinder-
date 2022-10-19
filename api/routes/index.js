const router = require('express').Router()  // Lo dejo listo para luego pasar las rutas

const usersRouter = require('./user')
const authRouter = require('./auth')

router.use('/user', usersRouter)
router.use('/auth', authRouter)







module.exports = router