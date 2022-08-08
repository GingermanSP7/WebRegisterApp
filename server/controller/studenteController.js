const studenteModel = require("../model/studenteModel");

exports.addStudente = ((req,res)=>{
    if(Object.keys(req.body).length == 0){                   
        res.status(400).send({message: "Content can't be empty"});
        return;
    }
    studenteModel.addStudente(req,function(err,result){
        if(!result){
            res.send(err);
        }
        console.log("Studente aggiunto correttamente!")
        res.send(result);
    })
})

