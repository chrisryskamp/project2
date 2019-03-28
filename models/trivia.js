module.exports = function(sequelize, DataTypes) {
  var Trivia = sequelize.define("trivia", {
    category: {
      type: DataTypes.TEXT,
    },
    question: {
      type: DataTypes.TEXT,
    },
    answer: {
      type: DataTypes.TEXT
  }, 
    external_id: {
      type: DataTypes.INTEGER
    }
  });  
  return Trivia;
};
