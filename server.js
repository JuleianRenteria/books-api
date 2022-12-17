const express = require('express')

//config
require('dotenv').config()
const PORT = process.env.PORT
const app = express ()

// Routes

app.get('/', (req, res)=> {
    res.send('Welcome to Books Api')
})

// Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})

app.use(express.json())