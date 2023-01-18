const express = require('express')
const UserController = require('./controlers/UserControler')
const AddressController = require('./controlers/AddressControler')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

// MÉTODOS DO CONTROLLER 

routes.get('/users', UserController.index) 
routes.post('/users', UserController.store)
// RELACIONAIS 
routes.get('/users/:user_id/addresses', AddressController.index) 
routes.post('/users/:user_id/addresses', AddressController.store)

module.exports = routes