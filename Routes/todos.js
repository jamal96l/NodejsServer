var express = require("express");
var router = express.Router();
var db = require("../modelo");

function getInfo(Req, res){
   db.Todo.find()
   .then(function(todos){
    res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
}

function postInfo(req, res){
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

function getInfoByID(req,res){
    db.Todo.findById({ _id : req.params.id})
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch (function(err){
        res.send(err);
    });
}

function putInfo(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(function(todo){
        res.json(todo);
    })
    .catch (function(err){
        res.send(err);
    });
}

function deleteInfo(req,res){
    db.Todo.remove({ _id : req.params.id })
    .then(function(todo){
        res.json({message: 'Is deleted'});
    })
    .catch (function(err){
        res.send(err);
    });
}

module.exports = {
    getInfo,
    postInfo,
    getInfoByID,
    putInfo,
    deleteInfo
};