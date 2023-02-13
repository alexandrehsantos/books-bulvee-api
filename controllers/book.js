const { restart } = require('nodemon')
const { getAllBooks, getBookById, saveBook, update, remove } = require('../services/book')
const { validationResult } = require('express-validator')



function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const id = req.params.id

        const books = getBookById(id)
        if (typeof books === "undefined") {
            res.status(404)
            res.send("Not found")
        } else {
            res.send(books)
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function createBook(req, res) {
    try {
        const newBook = req.body
        saveBook(newBook)
        res.status(201)
        res.send("Saved successfully")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function updateBook(req, res) {
    try {
        const id = req.params.id
        const toUpdate = req.body
        update(id, toUpdate)
        res.status(204)
        res.send("Successfully updated.")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function removeBook(req, res) {
    try {
        const id = req.params.id
        remove(id)
        res.status(204)
        res.send("Successfully deleted.")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    removeBook
}