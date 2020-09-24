const express = require("express");
const app = express();

app.get("/", function(req, res){  //rota
    res.sendFile(__dirname+"/html/index.html");         // MENSAGEM
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("PAG BLOG TESTE")
})

app.get("/ola/:nome/:cargo/:cor", function(req, res){ //":/nome:cargos" parametros
    res.send("<h1>Ola " + req.params.nome + "</h1>"+                           // retorna mesagem com parametros 
    "<h2>Seu cargo é " + req.params.cargo + "<h2>"+
    "<h3>Sua cor favorita é " + req.params.cor + "<h3>")

})

app.listen(8081, function(){
    console.log("SERVER ON URL HTTP://8081");
})

                       