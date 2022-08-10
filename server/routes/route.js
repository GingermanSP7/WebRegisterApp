const appelloController = require("../controller/appelloController");
const express = require("express");
const route = express.Router();
const upload = require("../helper/multer");
const dir = require("../helper/createDir");
const CSVToJSON = require("csvtojson");

/**
 * @Description route homepage
 * @method GET/
 */
route.get("/",(req,res)=>{
    res.render("index");
})

/**
 * @Description route visualizza appelli con tutti gli appelli visualizzati nella tabella
 * @method GET/visualizzaAppelli
 */
 route.get("/visualizzaAppelli",(req,res)=>{
    appelloController.getAllAppelli(req,function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.render("visualizzaAppelli",{appelli: result})
    })
})


/**
 * @Description route crea appello
 * @method GET/creaAppello
 */
 route.get("/creaAppello",(req,res)=>{
    res.render("creaAppello");
})

/**
 * @Description route tesisti
 * @method GET/tesisti
 */
 route.get("/tesisti",(req,res)=>{
    res.render("tesisti");
})

/**
 * @Description route progettisti
 * @method GET/progettisti
 */
 route.get("/progettisti",(req,res)=>{
    res.render("progettisti");
})

/**
 * @Description route updateAppello
 * @method PUT/updateAppello
 */
route.get("/updateAppello",(req,res)=>{
    appelloController.getAppello({query: {id: req.query.idAppello}},function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        res.render("updateAppello",{appello: result});
    });
});

route.put("/updateAppello/edit/:idAppello",(req,res)=>{
    // console.log("SONO NELLA ROUTE PUT: ", req);
    appelloController.getAppello({query:{id: req.body.idAppello}},function(err,result){
        if(!result){
            res.status(400).send(err);
        }
        appelloController.updateAppello({params: result, body: req.body},function(err,result){
            if(!result){
                res.status(400).send(err);
            }
        });
    });
    res.render("index");
})

route.get("/appello",(req,res)=>{
    res.render("appello");
});

// L'API viene chiamata dal form di appello.ejs
route.post("/uploadFile",dir.createDirForPrenotati,upload.array("fileCSV",2),(req,res)=>{   
    /**
     * leggere il file per gli studenti prenotati
     * chiamata per salvare gli studenti nel db
     * chiamata per creare l'esame nel db
     * leggere il file per l'esame e salvare i risultati in esame
     */

    
});

module.exports = route;