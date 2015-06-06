var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils');
var http = require('http');
var db = require('../db');

var objectId = 1;
var messages = [
  // Useful for debugging
  // {
  //   text: 'hello world',
  //   username: 'fred',
  //   objectId: objectId
  // }
];

db.connection.connect();
var dbResponse = [];

module.exports = {
  messages: {
    get: function (request, response) {
    // a function which handles a get request for all messages
      var messages = [];
      console.log("DB.CONNECTION.QUERY: ");
      db.connection.query('SELECT * FROM messages', function(err, row, fields) {
        var rowObj;
        for (var i in row) {
          rowObj = {};
          rowObj.text = row[i].messageText;
          rowObj.objectId = row[i].messageID;
          rowObj.username = 'fred';
          dbResponse.push(rowObj);
        }
      });
      console.log("OUTSIDE DB.CONNECTION: ");
      console.log(dbResponse);
      // utils.sendResponse(response, {results: messages});
      // utils.sendResponse(response, {results: [{text: 'heloword', username: 'fred', objectId: 535}, {text: 'helohelo', username: 'allen', objectId: 777}]});
      utils.sendResponse(response, {results: dbResponse});
      dbResponse = [];

    },
    post: function (request, response) {
    // a function which handles posting a message to the database
       // utils.collectData(request, function(message){
        var message = JSON.parse(JSON.stringify(request.body));
        message.objectId = objectId++;

        // DATABASE interaction
//        db.connection.connect();
        // console.log("DB IS: ");
        // console.log(db);
        //console.log("MESSAGE: ");
        //console.log(message);
        //console.log('INSERT INTO messages (messageText, messageID) VALUES (\'' + message.text + '\',' + Number(message.objectId) + ')');
        db.connection.query('INSERT INTO messages (messageText, messageID) VALUES (\'' + message.text + '\',' + Number(message.objectId) + ')');

        // db.connection.query('INSERT INTO messages (messageText, messageID) VALUES (\'Goodbye\', 777)');
        // db.connection.query('DELETE FROM messages WHERE messageID=535');

        //db.connection.end();




        utils.sendResponse(response, {objectId: objectId}, 201);
       // });
    },
    options: function (request, response) {
    // a function which handles a get request for all messages
      utils.sendResponse(response);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

