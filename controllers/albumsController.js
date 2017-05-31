

var db = require('../models');
var controllers = require('../controllers');

// GET /api/albums
function index(req, res) {

  db.Album.find({}, function(err, albums) {
    console.log(albums);
    res.json(albums);
  })

}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  // split at comma and remove and trailing space
  console.log("checking out req.body", req.body);
  console.log("checking out req.query", req.query);

  var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
  req.body.genres = genres;

  var newAlbum = new db.Album(req.body);
  newAlbum.save(function(err, album) {

    if(err) {
      console.log('error to create album', err);
    }
    res.json(album)
  });
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
