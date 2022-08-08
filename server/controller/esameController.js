const esameModel = require("../model/esameModel");

exports.creaEsame = (req,res)=>{
    esameModel.creaEsame(req,function(err,result){
        if(!result){
            console.log(err);
            res.status(404).send({message: "Errore nella creazione dell'esame, riprova!"});
        }
        res.statu(200).send({message: "Esame creato con successo!"});
    })
}