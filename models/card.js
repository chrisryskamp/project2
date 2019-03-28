module.exports = function(sequelize, DataTypes) {
  var Cards = sequelize.define("Cards", {
    question: DataTypes.TEXT,
    hint: DataTypes.STRING,
    answer: DataTypes.TEXT
  });
  return Cards;
};
