var express = require("express");
var port = process.env.PORT || 3000;
var todoRoutes = require("./Routes/todos");
var bodyParser = require('body-parser')

var api = express();
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
    extended: true
}));

// Add headers
api.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

api.use(bodyParser.json());

api.get('/api/getTodos', todoRoutes.getInfo);

api.post('/api/postTodos', todoRoutes.postInfo);

api.get('/api/getTodos/:id', todoRoutes.getInfoByID);

api.put('/api/updateTodos/:id', todoRoutes.putInfo);

api.delete('/api/DeleteTodos/:id', todoRoutes.deleteInfo);

api.use('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
/*
app.get('/feliz', function(req,res){
   res.send("=D") ;
});

app.get('/ejemplo', function(req, res) {
   res.send({message: "Ejemplo JSON"}); 
});*/

api.listen(port, function(){
   console.log("App esta utilizando el puerto" + port);
});

module.exports = api;