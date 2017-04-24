var Sequelize = require('sequelize');
let db = null;

if(process.env.DATABASE_URL){
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
  console.log('Connected to db');
} else {
  db = new Sequelize('whats_happening', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  console.log('connected to db locally');
}


module.exports = db;
