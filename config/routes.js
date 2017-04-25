var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var articlesController = require('../controllers/articles');


//Signup
router.post('/users/:username/:password', usersController.createUser);

//Login
router.get('/users/:username/:password', usersController.getUser);

//DB call to get Articles from NYT API
router.post('/articles/:username/:query', articlesController.grabArticles);

//Get all Articles in DB
router.get('/articles', articlesController.getArticles);

//Get all Users Articles
router.get('/users/:username/articles', articlesController.getUsersArticles);

//Delete a single Article
// router.delete('/users/:username/articles/:id', articlesController.deleteArticle);


module.exports = router;
