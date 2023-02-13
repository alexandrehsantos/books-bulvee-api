const { Router } = require("express")
const { restart } = require("nodemon")
const router = Router()
const { getBooks, getBook, createBook, updateBook, removeBook } = require("../controllers/book")
const { check } = require('express-validator')
router.get('/', getBooks)

router.get('/:id', [
    check('id').isInt().withMessage('Id must be a positive Integer')], getBook)

router.post('/', [
    check('id').isInt().withMessage('Id must be a positive Integer'),
    check('name').notEmpty().withMessage('Can not be empty or null')], createBook)

router.patch('/:id', updateBook)

router.delete('/:id', removeBook)

module.exports = router