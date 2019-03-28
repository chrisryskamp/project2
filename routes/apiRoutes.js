

// Requiring our Trivia model
var db = require("../models/index");


// Routes
// =============================================================
module.exports = function(app) {

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