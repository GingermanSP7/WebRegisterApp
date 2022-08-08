const { default: axios } = require("axios");
const express = require("express");
const services = require("../services/api");
const route = express.Router();
const upload = require("../helper/multer");
const fs = require("fs");
const dir = require("../helper/createDir");

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
    axios.get("http://localhost:3000/visualizzaAppelli/api/getAllAppelli")
    .then(function(response){
        console.log(response.data);
        res.render("visualizzaAppelli",{appelli: response.data});
    })
    .catch(err=>{
        console.log(err);
        res.send("visualizzaAppelli");
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
route.get("/updateAppello", (req,res)=>{
    axios.get('http://localhost:3000/visualizzaAppelli/api/getAppello',{params: {id: req.query.idAppello}})  // per ricercare lo specifico appello nel db
        .then((response)=>{
            res.render("updateAppello",{appello: response.data})
        })
        .catch(err=>{
            res.send(err);
        })
});

route.get("/appello",(req,res)=>{
    res.render("appello");
});

// route.use("/uploadFile",dir.createDirForPrenotati);
route.post("/uploadFile",dir.createDirForPrenotati,upload.array("fileCSV",2),(req,res)=>{
    // leggi il file degli studenti, aggiungili al Database ed elimina il file(opzionale)
    res.send("MBAREE");
});

module.exports = route;