const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync('fake-database.js'));

}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("fake-database.js"))
    return books.filter(book => book.id === id)[0]
}

function saveBook(newBook) {
    const books = JSON.parse(fs.readFileSync("fake-database.js"))   
    const newBooksList = [...books, newBook]
    fs.writeFileSync("fake-database.js", JSON.stringify((newBooksList)))
    return JSON.parse(fs.readFileSync("fake-database.js"))
}

function update(id, toUpdate) {
    let books = JSON.parse(fs.readFileSync("fake-database.js"))

    const indexToBeModified = books.findIndex(book => book.id === id)

    const updatedBook = { ...books[indexToBeModified], ...toUpdate}

    books[indexToBeModified] = updatedBook

    fs.writeFileSync("fake-database.js", JSON.stringify(books))
}

/* I made in this way in the first time.
function remove(id) {
    let books = JSON.parse(fs.readFileSync("fake-database.js"))
    
    const indexToBeRemoved = books.findIndex(book => book.id === id)

    books.splice(indexToBeRemoved, 1)

    fs.writeFileSync("fake-database.js", JSON.stringify(books))
}
*/

function remove(id) {
    const books = JSON.parse(fs.readFileSync("fake-database.js"))
    
    const newBooksList = books.filter(book => book.id !== id)

    fs.writeFileSync("fake-database.js", JSON.stringify(newBooksList))
}





module.exports = {
    getAllBooks,
    getBookById,
    saveBook,
    update,
    remove
}