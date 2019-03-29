

// Requiring our Todo model
var db = require("../models/triva");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/triva/", function(req, res) {
    db.Trivia.findAll({})
      .then(function(dbTrivia) {
        res.json(dbTrivia);
      });
  });
}; 

 
