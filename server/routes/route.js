const appelloController = require("../controller/appelloController");
const express = require("express");
const route = express.Router();
const CSVToJSON = require("csvtojson");
const studenteController = require("../controller/studenteController");
const esameController = require("../controller/esameController");

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
route.get("/tesisti", (req, res) => {
    res.render("tesisti");
})

/**
 * @Description route progettisti
 * @method GET/progettisti
 */
route.get("/progettisti", (req, res) => {
    res.render("progettisti");
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
        console.log("RESULT: ",result);
        res.render("appello",{esame: result});
    })
});

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
            console.log("esame inserito con successo!")
        })
        .catch((err) => {
            console.log(err.sqlMessage);
        })
});



module.exports = route;