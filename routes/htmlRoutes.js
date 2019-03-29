var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Cards.findAll({}).then(function(dbCards) {
      res.render("index", {
        msg: "Welcome!",
        Cards: dbCards
      });
    });
  });

  // Load Cards page and pass in an Cards by id
  app.get("/Cards/:id", function(req, res) {
    db.Cards.findOne({ where: { id: req.params.id } }).then(function(dbCards) {
      res.render("Cards", {
        Cards: dbCards
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
