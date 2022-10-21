const router = require('express').Router()

const { createPet, seeAllPets } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)

module.exports = router