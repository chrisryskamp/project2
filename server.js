var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
