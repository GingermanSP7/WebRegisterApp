const esameModel = require("../model/esameModel");

exports.creaEsame = (req,callback)=>{
    esameModel.creaEsame(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
}

exports.getAllEsame = (req,callback)=>{
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
            console.log("Errore controller: ");
            callback(err,null);
            return;
        }
        callback(null,result);
    })
}

exports.deleteEsame = (req,res)=>{
    if(Object.keys(req.query).length == 0){                   
        callback({msg: "Errore, nessun parametro passato!"},null);
        return;
    }
    esameModel.deleteEsame(req,function(err,result){
        if(!result){
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.status(200).send(result);
    })
}

exports.countPromossi = (req,res)=>{
    esameModel.countPromossi(req,function(err,result){
        if(err){
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send(String(result));
    })
}

exports.countRimandati = (req,res)=>{
    esameModel.countRimandati(req,function(err,result){
        if(!result){
            res.send(err);
            return;
        }
        res.send(String(result));
    })
}

