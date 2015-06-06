var controllers = require('./controllers/index');
var router = require('express').Router();

for (var route in controllers) {
  console.log("Inside routes.js");
  console.log("route is: " + route);
  console.log("controllers[route] is: ");
  console.log(controllers[route]);
  console.log("the long route thingy: ");
  console.log(router.route("/" + route).get(controllers[route].get));
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

