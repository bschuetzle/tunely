// index.js

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

//module.exports.Album = require("./albums.js");
module.exports = {
  Album: require('./albums.js')
}
