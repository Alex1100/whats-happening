var Sequelize = require('sequelize');
var db = require('../config/database');
var Article = require('../models/article');
var User = require('../models/user').User;
var request = require('request');


//read promises like a list to extend the time of return value coming through
var grabArticles = function(req, res){
  console.log(req.params.query);
  request.get(process.env.NYTIMES_ARTICLE_SEARCH_API_URL + req.params.query + process.env.NYTIMES_ARTICLE_SEARCH_API_KEY, function(err, response, articles){
      var articles = JSON.parse(articles);
      User.find({ where: {username: req.params.username }})
      .then(user => {
        let arrOfArticles = articles.response.docs.map(artc => {
          return {
            name: artc.headline.main,
            webUrl: artc.web_url,
            sample: artc.lead_paragraph,
            generalCategory: artc.section_name + ' ' + artc.subsection_name + ' ' + artc.type_of_material,
            source: artc.source,
            userId: user.id
          };
        });
        return Article.bulkCreate(arrOfArticles);
      })
      .then(finished => {
        res.status(201).send(finished);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });
};


var getArticles = function(req, res){
  Article.findAll({}).then((articles) => {
    res.status(200).send(articles);
  }).catch((err) => {
    res.status(400).send(err);
  });
};

//need a promise for these too!
var getUsersArticles = function(req, res){
  User.find({where: { username: req.params.username }})
    .then((user) => {
      Article.findAll({where: {userId: user.id}})
        .then((articles) => {
          res.status(200).send(articles);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};


var deleteUserArticle = function(req, res){
  User.find({where: { username: req.params.username }}, function(err, user){
    Article.destroy({id: req.params.id}, function(err, article){
      if(err){
        console.log("Error retrieving articles becuase: ", err);
      } else if(article){
        res.status(204).send(article);
      }
    });
  });
};



module.exports = {
  grabArticles,
  getUsersArticles,
  getArticles,
  deleteUserArticle
}
