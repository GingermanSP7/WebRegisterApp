const express = require("express");
const api = express.Router();
const appelloController = require("../controller/appelloController");
const studenteController = require("../controller/studenteController");
const esameController = require("../controller/esameController");

/**
 * API APPELLO
 */
api.get("/visualizzaAppelli/api/getAllAppelli",appelloController.getAllAppelli);
api.get("/visualizzaAppelli/api/getAppello",appelloController.getAppello);
api.put("/visualizzaAppelli/api/updateAppello/:idAppello",appelloController.updateAppello);
api.delete("/visualizzaAppelli/api/deleteAppello/:idAppello",appelloController.deleteAppello);
api.post("/api/creaAppello",appelloController.createAppello);

/**
 * API ESAME
 */
api.post("/api/creaEsame",esameController.creaEsame);
api.get("/api/getCountEsame",esameController.getCountEsame);
api.delete("/api/deleteEsame",esameController.deleteEsame);

/**
 * API STUDENTE
 */
api.post("/api/creaStudente",studenteController.addStudente);

module.exports = api;