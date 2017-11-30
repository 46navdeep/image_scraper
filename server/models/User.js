const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema (ES6 shorthand)

const userSchema = new Schema({
  keyword: String,
  links: []
});

mongoose.model("photos", userSchema);
