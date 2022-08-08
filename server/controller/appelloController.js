const { response } = require("express");
const sql = require("../database/dbConnection");
const appelloModel = require("../model/appelloModel");

exports.createAppello = ((req,res)=>{
    let result = {};
    if(Object.keys(req.body).length == 0){                   
        res.status(400).send({message: "Content can't be empty"});
        return;
    }
    result = appelloModel.creaAppello(req);
    /*
        ** BUG **
        console.log("RISULTATO TORNATO DAL DB: ",result);
        *   Il risultato della query è 'undefined' perchè in debug viene
            eseguito prima il log e dopo la query.
            Per cui non posso controllare se la query è stata eseguita con successo
     */
    if(result == true){
        res.redirect("/visualizzaAppelli")
    }
    res.redirect("/visualizzaAppelli");
});

exports.getAllAppelli = function(req,res){
    appelloModel.getAllAppelli(req.body,function(err,result){
        if(!result){
            response = {
                error: true,
                message: "Errore nella query sql"
            };
            res.send(response);
        }
        res.send(result);
    })
    // res.send(result);       // res.send manda il risultato a route.js che si occuperà di mandare i risultati e stamparli nella tabella html
}

exports.getAppello = function(req,res){
    appelloModel.getAppello(req,function(err,result){
        if(!result){
            response = {
                error: true,
                message: "Errore nella query sql"
            };
            res.send(response);
        }
        res.send(result);
    })
}

exports.updateAppello = function(req,res){
    if(Object.keys(req.body).length == 0){
        res.status(400).send({message: "Errore, nessun corpo specificato"});
        return;
    }
    else if(!req.params.idAppello || req.params.idAppello == ""){
        res.status(204).send({message: "No content"});
        return;
    }
    appelloModel.updateAppello(req,function(err,result){
        if(!result){
            response = {
                error: true,
                message: "Errore nella query sql"
            };
            res.send(err);
        }
        res.send(result);
    })
}

exports.deleteAppello = (req,res)=>{
    if(!req.params.idAppello){
        res.status(404).send("No element found");
        return;
    }
    appelloModel.deleteAppello(req,function(err,result){
        if(!result){
            console.log(err);
            res.status(400).send({message:"Errore nella cancellazione dell'elemento"});
        }
        res.status(200).send(result);
    })
}