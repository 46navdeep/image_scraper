var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var Scraper = require("images-scraper"),
  google = new Scraper.Google();

const User = mongoose.model("photos");

module.exports = app => {
  app.use(bodyParser.urlencoded());
  var link = new Array();
  link[0] = "empty";

  app.post("/home", function(req, res) {
    console.log(req.body.key);

    google
      .list({
        keyword: req.body.key,
        num: 15,
        detail: true,
        nightmare: {
          show: false
        }
      })
      .then(function(response) {
        for (var i = 0; i < 15; i++) {
          link[i] = response[i].thumb_url;
        }
        new User({ keyword: req.body.key, links: link })
          .save()
          .then(user => done(null, user));

        res.send(link);
      })
      .catch(function(err) {
        console.log("err", err);
      });
  });
};
