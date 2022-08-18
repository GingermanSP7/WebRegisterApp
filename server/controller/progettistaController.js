const progettistiModel = require("../model/progettistiModel");

exports.creaProgettista = (req,callback)=>{
    progettistiModel.creaProgettista(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
}

exports.getAllProgettisti = (req,callback)=>{
    progettistiModel.getAllProgettisti(req,function(err,result){
        if(!result){
                callback(err,null);
                return;
            }
        callback(null,result);
    })
}