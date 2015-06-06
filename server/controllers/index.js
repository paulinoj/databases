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
      console.log("HELLO THERE");
      console.log(request.body);
      console.log(utils);
      utils.collectData(request, function(message){
        console.log(message);
        message.objectId = ++objectId;
        messages.push(message);
        utils.sendResponse(response, {objectId: objectId}, 201);
      });
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

