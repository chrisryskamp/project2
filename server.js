var express = require("express");
<<<<<<< HEAD
var db = require("./models")
=======
// const pug = require("pug")

var db = require('./models');
>>>>>>> 7d057e14b0be1427586ae959cf7c6f6eb5f4f4e2

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars
// app.engine(
//   "pug",
//   exphbs({
//     main: "main"
//   })
// );
app.set("view engine", "pug");

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}

<<<<<<< HEAD
// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
=======
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(
            '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
            PORT,
            PORT
        );
    });
});
>>>>>>> 7d057e14b0be1427586ae959cf7c6f6eb5f4f4e2
