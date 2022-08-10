const studenteModel = require("../model/studenteModel");

exports.addStudente = ((req,callback)=>{
    console.log("RICHIESTA ARRIVATA AL CONTROLLER: ",req.body);
    if(Object.keys(req.body).length == 0){                   
        res.status(400).send({message: "Content can't be empty"});
        return;
    }
    studenteModel.addStudente(req,function(err,result){
        if(!result){
            callback(err,null);
        }
        callback(null,result);
    })
})

