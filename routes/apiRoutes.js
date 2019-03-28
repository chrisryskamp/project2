

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
      .then(function(dbTrivia) {
        res.json(dbTrivia);
      });
  });

}; 