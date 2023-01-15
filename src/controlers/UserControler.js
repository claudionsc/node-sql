// LIDA COM AS REQUISIÇÕES E DEVOLVE RESPOSTAS AO FRONTEND
const User = require('../models/Users')

module.exports = {
    async store(req, res){
        const { name, email, age } = req.body;

        const user = await User.create({ name, email, age })

        return res.json(user)
    }
}