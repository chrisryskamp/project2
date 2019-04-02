module.exports = function (sequelize, DataTypes) {
  var Flashcard = sequelize.define("flashcards", {
    category: {
      type: DataTypes.TEXT
    },
    term: {
      type: DataTypes.TEXT
    }, 
    definition: {
      type: DataTypes.TEXT
    },
      external_id: {
        type: DataTypes.INTEGER
      }
    });
return Flashcard;
}; 

