var express = require("express");
var router = express.Router();
var mysql = require('mysql2');
var mysql = require('mysql');
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
      res.setHeader('Content-Type', 'application/json');
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

// Specfic ANSWER
router.get('/answer/:idanswer', function (req, res, next) {
  let answerId = parseInt(req.params.id);
  models.answer
    .findOne({
      where: {
        answer_idanswer: answerId
      }
    })
    .then(answer => {
      res.render('specificActor', {
        answer: answer
      });
    });
});

// FIND OR CREATE A QUESTION
router.post('/questions', (req, res) => {
  models.questions
  findOrCreate({
    where: {
      questions: res.body.quesitons
    }
  })
  .spread(function (results, created) {
    if (created) {
      res.redirect('question');
    } else {
      res.send('This Question already exists!');
    }
  });
});

  // FIND OR CREATE A ANSWER
  router.post('/answer', (req, res) => {
    models.answer
    findOrCreate({
      where: {
        answer: res.body.answer
      }
    })
    .spread(function (results, created) {
      if (created) {
        res.redirect('answer');
      } else {
        res.send('This Answer already exists!');
      }
    });
  });

    // Association route
    router.get('/questions', function (req, res, next) {
      models.question
        .findAll({ include: [{ model: models.answer }] })
        .then(questionsFound => {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(questionsFound));
        });
    });



  // POST A QUESTION
  router.post('/question', function (req, res, next) {
    models.questions.create(req.body)
      .then(newQuestion => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newQuestion))
      })
      .caatch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

  // POST AN ANSWER
  router.post('/answer', function (req, res, next) {
    models.answer.create(req.body)
      .then(newAnswer => {
        res.setHeader('Content-Type', "application/json");
        res.send(JSON.stringify(newAnswer));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

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
