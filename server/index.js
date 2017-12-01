var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var keys = require("./config/keys");
require("./models/User");
const User = mongoose.model("photos");
var app = express();

mongoose.connect(keys.mongoURI);
require("./routes/searchRoutes")(app);
require("./routes/localFetchRoutes")(app);

app.listen(4000, function(req, res) {
  console.log("Express started on port 4000");
});
