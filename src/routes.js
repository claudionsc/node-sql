const express = require('express')
const UserController = require('./controlers/UserController')
const AddressController = require('./controlers/AddressController')
const TechController = require('./controlers/TechController')
const ReportController = require('./controlers/ReportController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

// MÉTODOS DO CONTROLLER 

routes.get('/users', UserController.index) 
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.delete)

// RELACIONAIS 1-N
routes.get('/users/:user_id/addresses', AddressController.index) 
routes.post('/users/:user_id/addresses', AddressController.store)

// RELACIONAIS N-N
routes.get('/users/:user_id/techs', TechController.index) 
routes.get('/techs', TechController.allTechs) 
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes