var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var keys = require("./config/keys");

require("./models/User");
const User = mongoose.model("photos");
var app = express();

app.post("/newlist", function(req, res) {
  User.find({}, function(err, docs) {
    if (err) console.log("error occured in the database");
    console.log(docs);
    res.send(docs);
  });
});

mongoose.connect(keys.mongoURI);
require("./routes/searchRoutes")(app);

app.listen(4000, function(req, res) {
  console.log("Express started on port 4000");
});
