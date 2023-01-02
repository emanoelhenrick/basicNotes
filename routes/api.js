const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('../model/posts.js')

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options))

router.get('/all', (req, res) => {

    res.json(JSON.stringify(posts.getAll()))

})

router.post('/new', bodyParser.json(), (req, res) => {


    const title = req.body.title
    const description = req.body.description

    posts.newPost(title, description)

    res.send('Post adcionado')

})

module.exports = router