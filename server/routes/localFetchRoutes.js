var bodyParser = require("body-parser");
const mongoose = require("mongoose");
//require("./models/User");
const User = mongoose.model("photos");

module.exports = app => {
  app.use(bodyParser.urlencoded());
  app.post("/newlist", function(req, res, next) {
    User.find({}, function(err, docs) {
      if (err) console.log("error occured in the database");
      res.send(docs);
    });
  });

  app.post("/sendsaved", function(req, res, next) {
    User.find({ keyword: req.body.key }, "links", function(err, docs) {
      if (err) console.log("error occured in the database");
      res.send(docs);
    });
  });
};
