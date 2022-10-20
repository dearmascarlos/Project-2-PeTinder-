const router = require('express').Router()

const { createPet, seeAllPets, addFriend } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)
router.put('/:petId/friend/:friendId', checkAuth, addFriend)

module.exports = router