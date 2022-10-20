const router = require('express').Router()  // Lo dejo listo para luego pasar las rutas


const authRouter = require('./auth')
const userRouter = require('./user')
const petRouter = require('./pet')
const breedRouter = require('./breed')
const dateRouter = require('./date')


router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/pet', petRouter)
router.use('/breed', breedRouter)
router.use('/date', dateRouter)


module.exports = router