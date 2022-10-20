const router = require('express').Router()

const { getAllUsers, getOneUser, upDateOneUser, deleteOneUser } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../utils')

router.get('/',checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.put('/:id', checkAuth, checkAdmin, upDateOneUser)
router.delete('/:id', checkAuth, checkAdmin, deleteOneUser)

module.exports = router
