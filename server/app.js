var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


//post("/", function() {console.log("POST REQUEST RECEIVED");});
// Set up our routes
app.use("/classes", router);


// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

// DATABASE interactions
db.connection.connect();
db.connection.query('INSERT INTO messages (messageText, messageID) VALUES (\'HELLO\', 535)');
db.connection.query('INSERT INTO messages (messageText, messageID) VALUES (\'Goodbye\', 777)');
db.connection.query('DELETE FROM messages WHERE messageID=535');

db.connection.end();
