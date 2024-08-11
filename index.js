const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const config = require("./config")

const app = express()
app.use(express.json())
app.use(cors())

//Import routes
const userRoutes = require('./app/users.routes.js')

//Configure routes
app.use('/api/users', userRoutes)


//Connect to database
mongoose.connect(config.database)
.then(() => console.log('Database connection established!'))
.catch(() => console.log('Database connection failed!'))

app.get('/', (req, res) => {
    res.send('<h1>CRUD API</h1>')
})

const port = 3000

app.listen(port, () => console.log(`Server is running at ${port} !`))