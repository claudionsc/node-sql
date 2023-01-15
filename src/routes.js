const express = require('express')
const UserController = require('./controlers/UserControler')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

routes.post('/users', UserController.store)

module.exports = routes