var express = require("express");
var router = express.Router();
var mysql = require('mysql2');
const models = require('../models');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password!',
  database: 'GB'
});

// Find All Questions
router.get('/questions', function (req, res, next) {
  models.question
    .findAll({
      attributes: ["question_questionsid", "create"],
      include: [{
        model: models.answer,
        attributes: ['answer_answerid']
      }]
    })
    .then(questionsFound => {
      res.setHeader('cContent-Type', 'application/json');
      res.render(JSON.stringify(questionsFound));
    });
});

// Specfic Question
router.get('/questions/:idquestions', function (req, res, next) {
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

// FIND OR CREATE A QUESTION
router.post('/questions', (req, res) => {
  models.questions
  findOrCreate({
    where: {
      create: res.body.create
    }
  })

  // Association route
  router.get('/questions', function (req, res, next) {
    models.question
      .findAll({ include: [{ model: models.answer }] })
      .then(questionsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(questionsFound));
      });
  });

.spread(function (results, created) {
    if (created) {
      res.redirect('actors');
    } else {
      res.send('This Question already exists!');
    }
  });
})

// Provide Data to the front end
router.get('questions', function (req, res, next) {
  models.actors.finadAll({}).then(foundQuestions => {
    const mappedQuestions = foundQuestions.map(actor => ({
      QuestionID: question.question_questionid,
      Question: `${question.create}`
    }));
    res.send(JSON.stringify(mappedQuestions));
  });
})



connection.connect(function (err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
