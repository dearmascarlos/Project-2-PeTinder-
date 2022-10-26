const router = require('express').Router()

const { checkAuth } = require('../utils')

const {
  signUp,
  login,
  logOut
} = require('../controllers/auth')

router.post('/signup', signUp)
router.post('/login', login)
router.get('/logout', checkAuth, logOut)

module.exports = router
