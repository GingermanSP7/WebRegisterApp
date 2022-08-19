const appelloController = require("../controller/appelloController");
const express = require("express");
const route = express.Router();
const CSVToJSON = require("csvtojson");
const studenteController = require("../controller/studenteController");
const esameController = require("../controller/esameController");
const progettistaController = require("../controller/progettistaController"); 

/**
 * @Description route homepage
 * @method GET/
 */
route.get("/", (req, res) => {
    res.render("index");
})

/**
 * @Description route visualizza appelli con tutti gli appelli visualizzati nella tabella
 * @method GET/visualizzaAppelli
 */
route.get("/visualizzaAppelli", (req, res) => {
    appelloController.getAllAppelli(req, function (err, result) {
        if (!result) {
            res.status(400).send(err);
        }
        res.render("visualizzaAppelli", { appelli: result })
    })
})


/**
 * @Description route crea appello
 * @method GET/creaAppello
 */
route.get("/creaAppello", (req, res) => {
    res.render("creaAppello");
})

/**
 * @Description route tesisti
 * @method GET/tesisti
 */
route.get("/studenti", (req, res) => {
    studenteController.getAllStudente(req,function(err,result){
        if (!result) {
            res.status(400).send(err);
        }
        res.render("studenti", { studente: result })
    })
})

/**
 * @Description route progettisti
 * @method GET/progettisti
 */
route.get("/progettisti", (req, res) => {
    progettistaController.getAllProgettisti(req, function (err, result) {
        if (!result) {
            res.status(400).send(err);
        }
        res.render("progettisti", { progettisti: result })
    })
})

/**
 * @Description route updateAppello
 * @method PUT/updateAppello
 */
route.get("/updateAppello", (req, res) => {
    appelloController.getAppello({ query: { id: req.query.idAppello } }, function (err, result) {
        if (!result) {
            res.status(400).send(err);
        }
        res.render("updateAppello", { appello: result });
    });
});

route.put("/updateAppello/edit/:idAppello", (req, res) => {
    // console.log("SONO NELLA ROUTE PUT: ", req);
    appelloController.getAppello({ query: { id: req.body.idAppello } }, function (err, result) {
        if (!result) {
            res.status(400).send(err);
        }
        appelloController.updateAppello({ params: result, body: req.body }, function (err, result) {
            if (!result) {
                res.status(400).send(err);
            }
        });
    });
    res.render("index");
})

route.get("/appello", (req, res) => {
    const request = {
        body: req.query.idAppello
    }
    esameController.getAllEsame(request,function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.render("appello",{esame: result});
    })
});

route.get("/updateEsame",(req,res)=>{
    const request = {
        body: {
            idAppello: req.query.idAppello,
            matricola: req.query.matricola
        }
    }
    esameController.getEsame(request,function(err,result){
        if(!result){
            console.log("Errore nella route!");
            res.status(400).send(err);
        }
        res.status(200).render("updateEsame",{esame: result});
    });
})

route.put("/updateEsame/edit",(req,res)=>{
    esameController.updateEsame(req,function(err,result){
        if(!result){
            console.log("Errore nella route!");
            res.status(400).send(err);
        }
        res.status(200).send("OK!");
    })
})

route.post("/creaEsame",(req,res)=>{
    esameController.creaEsame(req,function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.status(200).send(result);
    })
})

// L'API viene chiamata dal form di appello.ejs
route.post("/uploadFile", (req, res) => {
    /**
     * leggere il file per gli studenti prenotati
     * chiamata per salvare gli studenti nel db
     * chiamata per creare l'esame nel db
     * leggere il file per l'esame e salvare i risultati in esame
     */

    //leggere il file per gli studenti prenotati e salvare gli studenti nel db
    let nomeFile_studPrenotati = req.body.nomeFile[0];
    CSVToJSON().fromFile("C:/Users/salva/OneDrive/Desktop/WebRegisterApp2.0/server/helper/studPrenotati/" + nomeFile_studPrenotati)
        .then((arr) => {
            arr.forEach((studente) => {
                //console.log(studente);
                studenteController.addStudente({
                    body: {
                        matricola: `${studente.Matricola}`,
                        nome: `${studente.Nome}`,
                        cognome: `${studente.Cognome}`,
                        cf: `${studente.cf}`,
                        codCdsIscr: `${studente.codCdsIscr}`,
                        regolamento: `${studente.Regolamento}`,
                        cfu: `${studente.cfu}`
                    }
                }, function (err, result) {
                    if (!result && err) {
                        if(err.code == "ER_DUP_ENTRY"){
                            console.log("Errore, stai cercando di iserire elementi già presenti!");
                        }
                    }
                })
            })
        })
        .catch((err) => {
            console.log(err.message);
        })

    //leggere il file per l'esame e salvare i risultati in esame
    let nomeFile_appello = req.body.nomeFile[1];
    console.log("NOME FILE APPELLO: ",nomeFile_appello);
    CSVToJSON().fromFile("C:/Users/salva/OneDrive/Desktop/WebRegisterApp2.0/server/helper/appelli/"+nomeFile_appello)
        .then((arr) => {
            arr.forEach((esame) => {
                console.log("ESAME: ", esame);
                esameController.creaEsame({
                    body: {
                        idAppello: `${esame.idAppello}`,
                        matricola: `${esame.matricola}`,
                        maxRisposte: `${esame.maxRisposte}`,
                        risposteDate: `${esame.risposteDate}`,
                        maxVotoScritto: `${esame.maxVotoScritto}`,
                        formula: `${esame.formula}`,
                        orale: `${esame.orale}`,
                        laboratorio: `${esame.laboratorio}`,
                        votoComplessivo: `${esame.votoComplessivo}`,
                        stato: `${esame.stato}`
                    }
                }, function (err, result) {
                    if (!result) {
                        console.log(err);
                    }
                })
            })
        })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err.sqlMessage);
        })
});

route.post("/creaProgettista",(req,res)=>{
    progettistaController.creaProgettista(req,function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.status(200).send(result);
    })
})

route.post("/uploadFileProgettista",(req,res)=>{
    let nomeFile_Progettisti = req.body.nomeFile;
    console.log(req.body.nomeFile);
    CSVToJSON().fromFile("C:/Users/salva/OneDrive/Desktop/WebRegisterApp2.0/server/helper/progettisti/" + nomeFile_Progettisti)
        .then((arr) => {
            arr.forEach((progettista) => {
                //console.log(progettista);
                progettistaController.creaProgettista({
                    body: {
                        idAppello: `${progettista.ID_Appello}`,
                        matricola: `${progettista.Matricola}`,
                        voto: `${progettista.Voto}`,
                        votoProgetto: `${progettista.Voto_Progetto}`,
                        votoFinale: `${progettista.Voto_Finale}`,
                        dataConsegna: `${progettista.Data_Consegna}`,
                        esito: `${progettista.Esito}`,
                        titoloProgetto: `${progettista.Titolo_Progetto}`
                    }
                }, function (err, result) {
                    if (!result && err) {
                        if(err.code == "ER_DUP_ENTRY"){
                            console.log("Errore, stai cercando di iserire elementi già presenti!");
                        }
                    }
                })
            })
        })
        .catch((err) => {
            console.log(err.message);
        })
})

route.get("/updateProgettista",(req,res)=>{
    const request = {
        body: {
            matricola: req.query.matricola
        }
    }
    progettistaController.getProgettista(request,function(err,result){
        if(!result){
            console.log("Errore nella route!");
            res.status(400).send(err);
        }
        res.status(200).render("updateProgettista",{progettista: result});
    });
})

route.put("/updateProgettista/edit",(req,res)=>{
    progettistaController.updateProgettista(req,function(err,result){
        if(!result){
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.status(200).send(result);
    })
})

route.delete("/deleteProgettista",(req,res)=>{
    progettistaController.deleteProgettista(req,function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.status(200).send(result);
    })
})

module.exports = route;