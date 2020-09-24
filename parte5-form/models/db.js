//Conexão Banco de dados
const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('postapp','root','grandark',{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}