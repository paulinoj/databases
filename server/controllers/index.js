var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils');
var http = require('http');

var objectId = 1;
var messages = [
  // Useful for debugging
  // {
  //   text: 'hello world',
  //   username: 'fred',
  //   objectId: objectId
  // }
];

module.exports = {
  messages: {
    get: function (request, response) {
    // a function which handles a get request for all messages
      utils.sendResponse(response, {results: messages});
    },
    post: function (request, response) {
    // a function which handles posting a message to the database
        console.log(request.body);
       // utils.collectData(request, function(message){
        var message = JSON.parse(JSON.stringify(request.body));
        message.objectId = ++objectId;
        console.log("HERE IS THE REQUEST BODY:  ");
        console.log(request.body);
        messages.push(message);
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

