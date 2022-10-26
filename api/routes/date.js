const router = require('express').Router()

const {
    createDate, 
    seeAllDates, 
    seeOneDate, 
    updateOneDate, 
    deleteOneDate, 
    aceptedDate, 
    cancelledDate 
} = require('../controllers/date')

const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createDate)
router.get('/', checkAuth, checkAdmin, seeAllDates)
router.get('/:id', checkAuth, checkAdmin, seeOneDate)
router.put('/:id/acepted', checkAuth, aceptedDate)
router.put('/:id/cancelled', checkAuth, cancelledDate)
router.put('/:id', checkAuth, checkAdmin, updateOneDate)
router.delete('/:id', checkAuth, checkAdmin, deleteOneDate)

module.exports = router