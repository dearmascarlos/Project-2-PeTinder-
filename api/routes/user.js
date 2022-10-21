const router = require('express').Router()

const { getAllUsers, getOneUser, upDateOneUser, deleteOneUser, getOwnProfile, updateOwnProfile } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../utils')

router.get('/',checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.put('/profile', checkAuth, updateOwnProfile)
router.put('/:id', checkAuth, checkAdmin, upDateOneUser)
router.delete('/:id', checkAuth, checkAdmin, deleteOneUser)



module.exports = router
