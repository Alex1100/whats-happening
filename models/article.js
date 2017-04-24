var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Article = db.define('article', {
  name: Sequelize.TEXT,
  webUrl: Sequelize.TEXT,
  sample: Sequelize.TEXT,
  generalCategory: Sequelize.TEXT,
  source: Sequelize.TEXT
});

module.exports = Article;
