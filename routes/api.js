const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/posts.js')

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