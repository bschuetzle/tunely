
var express = require('express'), app = express();
var controllers = require('./controllers');



app.use(express.static('public'));

/**********
 * DATABASE *
 **********/
 var db = require('./models');



/**********
 * ROUTES *
 **********/


app.get('/', function homepage(req, res) {
   res.sendFile(__dirname + '/views/index.html');
});



// "GET" api
app.get('/api', controllers.api.index);

// "GET" api for albums
app.get('/api/albums', controllers.albums.index);




/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
