var http = require('http');
http.createServer(function(req,res ){
    res.end("ola mundo");

}).listen(8081);


console.log("SERVER ON");