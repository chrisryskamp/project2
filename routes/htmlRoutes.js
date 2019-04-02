var db = require("../models/index");

<<<<<<< HEAD
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Flashcard.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
=======
module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
      res.render("index");
  });
  // Load trivia form page
  app.get("/api/trivia", function(req, res) {
      res.render("triviaForm");
  });
>>>>>>> 7d057e14b0be1427586ae959cf7c6f6eb5f4f4e2

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};