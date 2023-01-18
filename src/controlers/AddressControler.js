const User = require('../models/Users')
const Address = require('../models/Address');

module.exports = {
    async store (req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        // BUSCA USER POR PRIMARY KEY 
        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(400).json({ error: 'Usuário não encontrado'})
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
        })
        return res.json(address)
    },

    // GET RELACIONAL 
    
    async index(req, res){
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        })

        return res.json(user)
        // return res.json(user.addresses)

    }
}