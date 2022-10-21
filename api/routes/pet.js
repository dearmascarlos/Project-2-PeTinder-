const router = require('express').Router()

<<<<<<< HEAD
const { createPet, seeAllPets, addFriend, updateOnePet, seeOnePet } = require('../controllers/pet')
=======
const { createPet, seeAllPets, addFriend, updateOnePet, seeOnePet, deleteOnePet } = require('../controllers/pet')
>>>>>>> efd010a873a4f3b3d40ed3134764b823052b7a00
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createPet)
router.get('/', checkAuth, seeAllPets)
router.get('/:id', checkAuth, checkAdmin, seeOnePet)
router.put('/:petId/friend/:friendId', checkAuth, addFriend)
router.put('/:id', checkAuth, checkAdmin, updateOnePet)
<<<<<<< HEAD
=======
router.delete('/:id', checkAuth, checkAdmin, deleteOnePet)
>>>>>>> efd010a873a4f3b3d40ed3134764b823052b7a00


module.exports = router