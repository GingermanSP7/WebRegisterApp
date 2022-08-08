const express = require("express");
const api = express.Router();
const appelloController = require("../controller/appelloController");

api.get("/visualizzaAppelli/api/getAllAppelli",appelloController.getAllAppelli);
api.get("/visualizzaAppelli/api/getAppello",appelloController.getAppello)
api.put("/visualizzaAppelli/api/updateAppello/:idAppello",appelloController.updateAppello);
api.delete("/visualizzaAppelli/api/deleteAppello/:idAppello",appelloController.deleteAppello)

api.post("/api/creaAppello",appelloController.createAppello)

module.exports = api;