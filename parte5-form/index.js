const express = require("express");
const app = express();



const handlebars = require('express-handlebars');//nome constInvertido

const bodyParser = require('body-parser');

const Post = require('./models/Post')
//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

//Bodyparser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


//const { brotliDecompress } = require("zlib");

//Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){  //({order:[['id', 'DESC']]}) ordem de exibiçao
            res.render('home',{posts: posts})
        })
       
    })

    app.get('/cad',function(req,res){
         res.render('formularios')
    })
    app.post('/add', function(req,res){
      Post.create({
          Titulo: req.body.titulo,
          Conteudo: req.body.conteudo
      }).then(function(){
          res.redirect('/')
      }).catch(function(erro){
          res.send("Erro" + erro)
      })
       
    })

    app.get

    
app.listen(8081, function(){
    console.log("SERVER ON URL HTTP://8081");
})

                       