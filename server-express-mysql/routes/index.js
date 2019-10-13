var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var mysql = require('mysql2');
const models = require('../models');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password!',
  database: 'GB'
});

router.get('/questions', function(req, res, next) {
  models.question.findAll({}).then(questionsFound => {
    res.render('questions', {
      questions: questionsFound
    });
  });
});

router.get('/questions/:idquestions', function(req, res, next) {
  let questionId = parseInt(req.params.id);
  models.question
    .findOne({
      where: {
        question_idquestions: questionId
      }
    })
    .then(question => {
      res.render('specificActor', {
        question: question
      });
    });
});

router.post('/questions', (req,res) => {
  models.questions
    findOrCreate({
      where: {
      idquestions:res.body.idquestions
    }
})
.spread(function(results, created) {
  if (created) {
    res.redirect('actors');
  } else {
    res.send('This Question already exists!');
    } 
  });
})
  


connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
