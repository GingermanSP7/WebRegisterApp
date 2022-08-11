const esameModel = require("../model/esameModel");

exports.creaEsame = (req,callback)=>{
    console.log("CORPO ARRIVATO AL CONTROLLER: ",req.body);
    esameModel.creaEsame(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
}

exports.getAllEsame = (req,callback)=>{
    console.log("CORPO ARRIVATO AL CONTROLLER: ",req.body);
    esameModel.getAllEsame(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
}

exports.getCountEsame = (req,res)=>{
    esameModel.getCountEsame(req,function(err,result){
        if(!result){
            res.status(400).send(err);
            return;
        }
        res.send(result);
    })
}

exports.getEsame = (req,callback)=>{
    if(Object.keys(req.body).length == 0){                   
        callback({msg: "Errore, nessun body passato!"},null);
        return;
    }
    esameModel.getEsame(req,function(err,result){
        if(!result){
            callback(err,null);
            return;
        }
        callback(null,result);
    })
}

exports.updateEsame = (req,callback)=>{
    if(Object.keys(req.body).length == 0){                   
        callback({msg: "Errore, nessun body passato!"},null);
        return;
    }
    esameModel.updateEsame(req,function(err,result){
        if(!result){
            callback(err,null);
            return;
        }
        callback(null,result);
    })
}