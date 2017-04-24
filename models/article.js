var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Article = db.define('article', {
  name: Sequelize.STRING,
  webUrl: Sequelize.STRING,
  sample: Sequelize.STRING,
  generalCategory: Sequelize.STRING
});

module.exports = Article;
