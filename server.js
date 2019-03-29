var express = require("express");
<<<<<<< HEAD
const pug = require("pug")

var db = require('./models');
=======
>>>>>>> Matt

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
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
=======

// Static directory to be served
app.use(express.static("app/public"));
>>>>>>> Matt

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app); 

<<<<<<< HEAD
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
            PORT,
            PORT
        );
    });
=======
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
>>>>>>> Matt
});
