const DevController = require("./controllers/DevController")
const LikeController = require("./controllers/LikeController")
const DislikeController = require("./controllers/DislikeController")
const routes = require("express").Router();

routes.post('/devs', DevController.store);
routes.post('/devs/:id/like', LikeController.store);
routes.post('/devs/:id/dislike', DislikeController.store);
routes.get('/devs', DevController.index)

module.exports = routes;