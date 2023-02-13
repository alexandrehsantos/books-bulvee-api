const fs = require("fs")

const savedData = JSON.parse(fs.readFileSync("fake-database.js"))
const newData = {id: '3', name: 'book3'}


fs.writeFileSync("fake-database.js", JSON.stringify([...savedData, newData]))


console.log(JSON.parse(fs.readFileSync("fake-database.js")))

