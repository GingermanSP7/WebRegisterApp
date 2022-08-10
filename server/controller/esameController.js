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