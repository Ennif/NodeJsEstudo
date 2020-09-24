//Conexão Banco de dados
const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('postapp','root','grandark',{
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
    
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}