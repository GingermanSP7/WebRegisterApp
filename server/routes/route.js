const { default: axios } = require("axios");
const express = require("express");
const route = express.Router();
const upload = require("../helper/multer");
const dir = require("../helper/createDir");
const CSVToJSON = require("csvtojson");
const qs = require("qs");

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

// L'API viene chiamata dal form di appello.ejs
route.post("/uploadFile",dir.createDirForPrenotati,upload.array("fileCSV",2),(req,res)=>{   
    /**
     * leggere il file per gli studenti prenotati
     * chiamata per salvare gli studenti nel db
     * chiamata per creare l'esame nel db
     * leggere il file per l'esame e salvare i risultati in esame
     */
    
    //leggere il file per gli studenti prenotati e salvare gli studenti nel db
    let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0,10);
    CSVToJSON().fromFile("C:/Users/salva/OneDrive/Desktop/WebRegisterApp2.0/server/helper/appelli/"+date+"/StudentiFakeCSV.csv")
    .then((arr)=>{
        arr.forEach((studente)=>{
            console.log("STUDENTE: ",studente);        
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/creaStudente',
                data: qs.stringify({
                  matricola: `${studente.matricola}`,
                  nome:  `${studente.nome}`,
                  cognome:`${studente.cognome}`
                }), 
                headers: {
                  'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
                }
              })
            .then((response)=>{
                console.log("studenti inseriti con successo!")
            })
            .catch((err)=>{
                console.log(err.message);
            })
        })
    })
    .catch((err)=>{
        console.log(err.message);
    })
    


    // //chiamata per creare l'esame nel db
    // axios.post("/api/creaEsame")
    // .then((response)=>{
    //     console.log(response.data);
    //     res.render("appello",{appello: response.data});
    // })
    // .catch((err)=>{
    //     console.log(err);
    //     res.render("appello",{errore: err.message});
    // })

    res.render("appello");
});

module.exports = route;