var db = require("../models/index");


// module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Flashcard.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

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


  app.get("/api/trivia", function(req, res) {
      res.render("triviaForm");
  });
};
  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });


