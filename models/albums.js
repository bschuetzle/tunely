// albums.js

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AlbumsSchema = new Schema (
  {
    artistName: String,
    name: String,
    releaseDate: Date,
    genres: [String]
  }
)

var Album = mongoose.model('Album', AlbumsSchema);

module.exports = Album;
