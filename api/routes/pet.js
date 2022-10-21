const router = require('express').Router()

const { createPet, seeAllPets, addFriend, updateOnePet, seeOnePet } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)
router.get('/:id', checkAuth, checkAdmin, seeOnePet)
router.put('/:petId/friend/:friendId', checkAuth, addFriend)
router.put('/:id', checkAuth, checkAdmin, updateOnePet)


module.exports = router