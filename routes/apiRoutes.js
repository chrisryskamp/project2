var db = require("../models");

module.exports = function(app) {
  // Get all Cards
  // app.get("/api/cards", function(req, res) {
  //   db.Cards.findAll({}).then(function(dbCards) {
  //     res.json(dbCards);
  //   });
  // });

  app.get("/api/cards", function(req, res) {
    var cardList = [];
    db.Cards.findAll({}).then(function(data) {
      for (var i = 0; i < data.length; i++) {

        // Create an object to save current row's data
        var cardData = {
          'question':data[i].question,
          'hint':data[i].hint,
          'answer':data[i].answer
        }
        // Add object into array
        cardList.push(cardData);
    }
    console.log(cardList);
    // Render index.pug page using array 
    res.render("cards", {"cardList":cardList});
      // var cardsObj = {
      //   Cards: data
      // };
      // var cardsObj1 = [
      //   {
      //   cardText: "ttttt",
      // },
      // {
      //   cardText: "ttttt",
      // }];
      // console.log(cardsObj.Cards[0].dataValues);
      // res.render("cards", {"cardsObj":cardsObj1});
      // console.log(data.dataValues);
      // res.render("cards", data.dataValues);
    });
  });

  // Create a new Cards
  app.post("/api/cards", function(req, res) {
    db.Cards.create(req.body).then(function(dbCards) {
      res.json(dbCards);
    });
  });

  // Delete an Cards by id
  app.delete("/api/cards/:id", function(req, res) {
    db.Cards.destroy({ where: { id: req.params.id } }).then(function(dbCards) {
      res.json(dbCards);
    });
  });
};
