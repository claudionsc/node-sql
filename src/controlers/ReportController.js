// CONTROLLER PARA CRIAR "RELATORIOS"
const { Op } = require('sequelize') // OPERADORES DO SEQUELIZE PARA ENCONTRAR UMA PARTE DE TEXTO
const User = require('../models/Users')

module.exports = {
    async show(req, res){
        // ENCONTRAR TODOS OS USERS QUE CONTEM 
        // EMAIL QUE TERMINA COM ROCKETSEAT
        // DESSES USUARIOS QUERO BUSCAR TODOS QUE MORAM NA RUA GUILHERME
        // DESSES USERS, QUERO BUSCAR AS TECHS QUE COMEÇÃO COM REACT

        // INICIA BUSCANDO TODOS OS USERS

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: { //buscar por todos os emails
                    [Op.iLike]: '%@rocketseat.com.br' //que terminam com isso
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Guilherme'} }, //ENDEREÇOS
                //TECNOLOGIAS
                { 
                    association: 'techs', 
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    } 
                }, 
            ]
        })

        return res.json(users)
    }
}