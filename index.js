const express = require('express')

const path = require('path')

const apiRoute = require('./routes/api')


const app = express()



app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, 'public')))








const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})

