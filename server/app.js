var express = require( 'express' );
var app = express();

var server = app.listen(process.env.PORT || 8080, function() {
  console.log('Server listening...');
});

app.get( '/nimoy', function(req, res) {
  res.writeHead(200);
  res.write( 'Live long and prosper.' );
  res.end();
});

app.get( '/shatner', function(req, res) {
  res.writeHead(200);
  res.write( 'I\'ve...got...  A plan.');
  res.end();
});

app.get( '/kelley', function(req, res) {
  res.writeHead(200);
  res.write( 'Dammit, Jim!');
  res.end();
});
