var db = require("../models");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
      res.render("landing");
  });
  // Load trivia form page
  // app.get("/api/trivia", function(req, res) {
  //     res.render("triviaForm");
  // });

  app.get("/api/form", function(req, res) {
    res.render("index");
  });
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
