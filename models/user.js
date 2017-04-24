var Sequelize = require('sequelize');
var db = require('../config/database');
var Articles = require('./article');

var User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

User.hasMany(Articles);
Articles.belongsTo(User);


User.sync();
Articles.sync();

module.exports = {
  User: User,
  Articles: Articles
}

