var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Article = db.define('article', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.TEXT,
  webUrl: Sequelize.TEXT,
  sample: Sequelize.TEXT,
  generalCategory: Sequelize.TEXT,
  source: Sequelize.TEXT,
  views: Sequelize.INTEGER
});

module.exports = Article;
