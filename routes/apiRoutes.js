const { Router } = require("express");
const characterRouter = require("../routes/characterRoutes");
const highscoreRouter = require("../routes/highscoreRoutes");

const apiRoutes = Router();

apiRoutes.use("/characters", characterRouter);
apiRoutes.use("/highscore", highscoreRouter);

module.exports = apiRoutes;