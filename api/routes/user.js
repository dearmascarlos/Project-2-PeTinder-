const router = require('express').Router()

const { getAllUsers } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../utils')

router.get('/',checkAuth, checkAdmin, getAllUsers)
module.exports = router
