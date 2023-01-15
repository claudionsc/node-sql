const dotenv = require('dotenv')

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
    define: {
        timestaps: true,
        underscored: true // define o título das tables e das colunas como snake case
    }
}