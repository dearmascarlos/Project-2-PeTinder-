const router = require('express').Router()


const { createOneAddress, seeAllAddresses, seeOneAddress, updateOneAddress, deleteOneAddress } = require('../controllers/address')
const { checkAdmin, checkAuth } = require('../utils')


router.get('/', checkAuth, checkAdmin, seeAllAddresses)
router.get('/:userId', checkAuth, checkAdmin, seeOneAddress)
router.post('/', checkAuth, checkAdmin, createOneAddress)
router. put('/:userId', checkAuth, checkAdmin, updateOneAddress)
router. delete('/:userId', checkAuth, checkAdmin, deleteOneAddress)


module.exports = router