var bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('../models/user');

var createUser = function(req, res){
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, saltRounds).then((hash) => {
      User.findAll({password: hash}, function(err, success){
        if(err){
          User.create({
            username: req.body.username,
            password: hash
          });
          res.sendStatus(201);
        } else if(success){
          console.log("User already exists");
          res.sendStatus(200);
        }
      });
    });
  });
};





module.exports = {
  createUser: createUser
}
