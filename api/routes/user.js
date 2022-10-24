const router = require('express').Router()

const { getAllUsers, getOneUser, upDateOneUser, deleteOneUser, getOwnProfile, updateOwnProfile, deleteOwnProfile, createOwnPet } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../utils')


router.post('/pet', checkAuth, createOwnPet)
router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.put('/profile', checkAuth, updateOwnProfile) 
router.put('/:id', checkAuth, checkAdmin, upDateOneUser)
router.delete('/profile', checkAuth, deleteOwnProfile)
router.delete('/:id', checkAuth, checkAdmin, deleteOneUser)



module.exports = router
