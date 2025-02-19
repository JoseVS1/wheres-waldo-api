const { Router } = require("express");
const characterController = require("../controllers/characterController");

const characterRoutes = Router();

characterRoutes.get("/", characterController.getAllCharacters);
characterRoutes.get("/:id", characterController.getCharacter);
characterRoutes.get("/:id/checkPosition", characterController.getCheckCharacterPosition);

module.exports = characterRoutes;