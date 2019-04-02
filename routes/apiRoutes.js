<<<<<<< HEAD


// Requiring our Trivia model
var db = require("../models/index");

=======
// Requiring our Todo model
var db = require("../models");
var axios = require('axios');
>>>>>>> 7d057e14b0be1427586ae959cf7c6f6eb5f4f4e2

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
      var i = Math.floor(Math.random() * data.length)
      console.log(i)
      cardData = data[i];
      res.render("cards", { cardData });
    });
  });

  // Get Trivia Questions
  app.get("/api/trivia", function (req, res) {
    axios.get("https://opentdb.com/api.php?amount=1").then(response => {
      var question = response.data.results[0].question;
      var answer = response.data.results[0].correct_answer
      console.log(question);
      res.render("trivia", {question, answer})
    });
  });
  // app.get("/api/trivia/:num", function(req, res) {
  //   // var cardList = [];
  //     var i = Math.floor(Math.random() * data.length)
  //     console.log(i)
  //     cardData = res.data[i];
  //   res.render("trivia", {cardData});
  // });

<<<<<<< HEAD
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
}; 
=======
  // Create a new Cards
  app.post("/api/cards", function (req, res) {
    db.Cards.create(req.body).then(function () {
      res.redirect("/");
    });
  });

  //   // Delete an Cards by id
  //   app.delete("/api/cards/:id", function(req, res) {
  //     db.Cards.destroy({ where: { id: req.params.id } }).then(function(dbCards) {
  //       res.json(dbCards);
  //     });
  //   });
};
>>>>>>> 7d057e14b0be1427586ae959cf7c6f6eb5f4f4e2
