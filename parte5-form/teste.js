/*const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('teste','root','grandark',{
    host: "localhost",
    dialect: "mysql"
})*/

/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar "+ erro)
})
*/

const Postagem = sequelize.define('postagem', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }

})

/*Postagem.create({
    titulo: "UM TITULO",
    conteudo : "HELLOOOehufheuheuheuhehu"
})*/

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "ezau",
    sobrenome: "martins",
    idade: 23,
    email:"ezaumateus97@gmail.com"
})
//Usuario.sync({froce:true})