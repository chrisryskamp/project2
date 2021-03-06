// Requiring our Todo model
var db = require("../models");
var axios = require('axios');


// Routes
// =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/api/triva/", function(req, res) {
//     db.Trivia.findAll({})
//       .then(function(dbTrivia) {
//         res.json(dbTrivia);
//       });
//   });
// }; 

module.exports = function (app) {
  // Get all Cards
  app.get("/api/cards", function (req, res) {
    // var cardList = [];
    db.Cards.findAll({}).then(function (data) {
      if (data) {
        var i = Math.floor(Math.random() * data.length)
        console.log(i)
        cardData = data[i];
        res.render("cards", { cardData });
      } else {
        res.redirect("/error")
      }
    });
  });

  // Get Trivia Questions
  app.get("/api/trivia", function (req, res) {
    axios.get("https://opentdb.com/api.php?amount=1").then(response => {
      var question = `${response.data.results[0].question}`;
      var questionString = question.includes("&")
      var answer = response.data.results[0].correct_answer
      console.log(questionString);
      if (questionString) {
        res.redirect("/api/trivia")
      } else {
        res.render("trivia", {question, answer})
      }
    });
  });
  // app.get("/api/trivia/:num", function(req, res) {
  //   // var cardList = [];
  //     var i = Math.floor(Math.random() * data.length)
  //     console.log(i)
  //     cardData = res.data[i];
  //   res.render("trivia", {cardData});
  // });

  app.get("/api/trivia/", function(req, res) {
    db.trivia.findAll({})
      .then(function(dbTrivia) {
        res.json(dbTrivia);
      });
  });

  app.get("/api/flashcards/", function(req, res) {
    db.flashcards.findAll({})
      .then(function(dbFlashcards) {
        res.json(dbFlashcards);
      });
  });

  app.post("/api/posts/" , function(req, res) {
    console.log(req.body);
    db.trivia.create({
      category: req.body.category,
      question: req.body.question,
      answer: req.body.answer,
      external_id: req.body.external_id
    })
      .then(function(dbTrivia) {
        res.json(dbTrivia);
      });
  });
 
  // Create a new Cards
  app.post("/api/cards", function (req, res) {
    db.Cards.create(req.body).then(function () {
      res.redirect("/api/form");
    });
  });
};
  //   // Delete an Cards by id
  //   app.delete("/api/cards/:id", function(req, res) {
  //     db.Cards.destroy({ where: { id: req.params.id } }).then(function(dbCards) {
  //       res.json(dbCards);
  //     });
  //   });

