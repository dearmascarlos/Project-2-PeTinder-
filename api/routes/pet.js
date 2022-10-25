const router = require('express').Router()

const { createPet, seeAllPets, addFriend, addOwnFriend, updateOnePet, seeOnePet, deleteOnePet, getOwnPetsProfile, getOwnPet, deleteOwnPetProfile, updateOwnPetProfile, createOwnPetDate, seeOwnPetDates } = require('../controllers/pet')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.post('/:petId', checkAuth, createOwnPetDate)// creo que esta deberia ir en date (controller y routes)
router.get('/', checkAuth, seeAllPets)
router.get('/profile', checkAuth, getOwnPetsProfile)
router.get('/profile/:id', checkAuth, getOwnPet)
router.get('/:id/date', checkAuth, seeOwnPetDates)
router.get('/:id', checkAuth, seeOnePet)
router.put('/profile/:id', checkAuth, updateOwnPetProfile)
router.put('/:id/friend/:friendId', checkAuth, addOwnFriend)
router.put('/:id', checkAuth, checkAdmin, updateOnePet)
router.delete('/profile/:id', checkAuth, deleteOwnPetProfile)
router.delete('/:id', checkAuth, checkAdmin, deleteOnePet)


module.exports = router