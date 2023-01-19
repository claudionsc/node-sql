// LIDA COM AS REQUISIÇÕES E DEVOLVE RESPOSTAS AO FRONTEND
const User = require('../models/Users')

module.exports = {

    async index(req, res){ // buscar por todos os usuarios
        const users = await User.findAll()

        return res.json(users)
    },
    
    async store(req, res){
        const { name, email, age } = req.body;

        const user = await User.create({ name, email, age })

        return res.json(user)
    },

    async delete(req, res) { // DELETA RELAÇÃO DA TECH COM O USER
       
        const { id } = req.params;

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' })
        }

        await user.findAndDelete({where: { id }})

        return res.json()
    }
}




