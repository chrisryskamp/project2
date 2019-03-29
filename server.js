var express = require("express");
const pug = require("pug")

var db = require('./models');

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

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app); 

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}

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
