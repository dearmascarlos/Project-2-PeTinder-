const router = require('express').Router()

const { createPet, seeAllPets, addFriend, updateOnePet, seeOnePet, deleteOnePet, getOwnPetsProfile, getOwnPet, deleteOwnPetProfile, updateOwnPetProfile } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)
router.get('/profile', checkAuth, getOwnPetsProfile)
router.get('/profile/:id', checkAuth, getOwnPet)
router.get('/:id', checkAuth, seeOnePet)
router.put('/profile/:id', checkAuth, updateOwnPetProfile)
router.put('/:petId/friend/:friendId', checkAuth, addFriend)// tenemos que permitirle esto solo a quien es su dueño
router.put('/:id', checkAuth, checkAdmin, updateOnePet)
router.delete('/profile/:id', checkAuth, deleteOwnPetProfile)
router.delete('/:id', checkAuth, checkAdmin, deleteOnePet)


module.exports = router