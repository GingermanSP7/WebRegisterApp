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

exports.getAllAppelli = function(req,callback){
    appelloModel.getAllAppelli(req.body,function(err,result){
        if(!result){
           callback(err,null);
        }
        callback(null,result);
    })
}

exports.getAppello = async function(req,callback){
    await appelloModel.getAppello(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
}

exports.updateAppello = async function(req,callback){
    console.log("RICHIESTA UPDATE: ",req);
    if(Object.keys(req.body).length == 0){
        callback({message: "Errore, corpo mancante"},null);
    }
    else if(!req.params[0].idAppello || req.params[0].idAppello == ""){
        callback({message: "Errore, parametri mancanti"},null);
    }
    await appelloModel.updateAppello(req,function(err,result){
        if(err){
            callback(err,null);
        }
        callback(null,result);
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