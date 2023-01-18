const User = require('../models/Users')
const Tech = require('../models/Tech')

module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' })
        }

        // FIND OR CREATE VAI TENTAR PROCURAR POR UMA TECNOLOGIA
        // E SE ELA NÃO EXISTIR ELE VAI CRIAR

        // const [ tech, create ] = await Tech.findOrCreate({
        const [tech] = await Tech.findOrCreate({
            where: { name }
        })

        // OBS: METODOS AUXILIARES DE ASSOCIATIONS NO MANUAL DO SEQUELIZE 
        // ASSOCIATIONS

        await user.addTech(tech)

        return res.json(tech)
    },

    // GET RELACIONAL 

    async index(req, res) {


    },
    async delete(req, res) { // DELETA RELAÇÃO DA TECH COM O USER
        const { user_id } = req.params;
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' })
        }

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)

        return res.json()
    }
}