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