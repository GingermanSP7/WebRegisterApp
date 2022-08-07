const express = require("express");
const api = express.Router();
const appelloController = require("../controller/appelloController");

api.get("/visualizzaAppelli/api/getAllAppelli",appelloController.getAllAppelli);
api.post("/api/creaAppello",appelloController.createAppello)

module.exports = api;