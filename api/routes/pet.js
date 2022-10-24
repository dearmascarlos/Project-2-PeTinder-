const router = require('express').Router()

const { createPet, seeAllPets, addFriend, updateOnePet, seeOnePet, deleteOnePet } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)
router.get('/:id', checkAuth, checkAdmin, seeOnePet)
router.put('/:petId/friend/:friendId', checkAuth, addFriend)
router.put('/:id', checkAuth, checkAdmin, updateOnePet)
router.delete('/:id', checkAuth, checkAdmin, deleteOnePet)


module.exports = router