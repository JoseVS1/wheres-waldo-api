const { Router } = require("express");
const highscoreController = require("../controllers/highscoreController");

const highscoreRouter = Router();

highscoreRouter.get("/", highscoreController.getHighscore);
highscoreRouter.post("/", highscoreController.postSetHighscore);
highscoreRouter.delete("/", highscoreController.deleteHighscore);

module.exports = highscoreRouter;