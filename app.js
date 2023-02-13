const express  = require('express')
const app = express()
const port = 8000
const bookRouter = require('./routes/book')

app.use(express.json())
app.use('/books', bookRouter)

app.listen(port, ()=>{
    console.log(`Working in port ${port}`)
})
