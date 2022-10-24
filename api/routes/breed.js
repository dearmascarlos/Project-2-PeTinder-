const router = require('express').Router()

const { createOneBreed, seeAllBreeds, seeOneBreed, updateOneBreed, deleteOneBreed } = require('../controllers/breed')
const { checkAdmin, checkAuth } = require('../utils')

router.post('/', checkAuth, checkAdmin, createOneBreed)
router.get('/', checkAuth, checkAdmin, seeAllBreeds)
router.get('/:id', checkAuth, checkAdmin, seeOneBreed)
router.put('/:id', checkAuth, checkAdmin, updateOneBreed)
router.delete('/:id', checkAuth, checkAdmin, deleteOneBreed)

module.exports = router