var Sequelize = require('sequelize');
var db = require('../config/database');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('../models/user').User;

var createUser = function(req, res){
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.params.password, salt, function(err, hash){
      User.findOne({where: {username: req.params.username }}).then((person) => {
        if(person){
          bcrypt.compare(req.params.password, hash, function(err, data){
            console.log("User already exists");
            res.status(200).send(person);
          });
        } else {
          User.create({
            username: req.params.username,
            password: hash
          });
          res.sendStatus(201);
        }
      });
    });
  });
};


var getUser = function(req, res){
  console.log("Checking the password from params from react: ", req.params.password);
  console.log("Checking the username from the params from react", req.params.username);
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.params.password, salt, function(err, hash){
      User.findOne({where: {username: req.params.username }}).then((user) => {
        if(user){
          bcrypt.compare(req.params.password, hash, function(err, data){
            console.log("User Logged In");
            res.status(200).send(user);
          });
        } else {
          console.log('Invalid Login Credentials');
          res.status(404).send(err);
        }
      });
    });
  });
};


module.exports = {
  createUser,
  getUser
}
