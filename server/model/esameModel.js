const sql = require("../database/dbConnection");

let esame = sql.query("create table if not exists esame(idAppello bigint unsigned, matricola varchar(10) not null, maxRisposte int unsigned not null, risposteDate int unsigned not null, maxVotoScritto int unsigned not null, formula varchar(30), orale int unsigned not null, laboratorio int unsigned not null, votoComplessivo varchar(3) not null,stato varchar(20),foreign key(matricola) references studente(matricola) on delete cascade,foreign key (idAppello) references appello(idAppello) on delete cascade,primary key(idAppello,matricola));")

function creaEsame(req,callback){
    sql.connect(function(){
        const idAppello = req.body.idAppello;
        const matricola = req.body.matricola;
        const maxRisposte = req.body.maxRisposte;
        const risposteDate = req.body.risposteDate;
        const maxVotoScritto = req.body.maxVotoScritto;
        const formula = req.body.formula;
        const orale = req.body.orale;
        const laboratorio = req.body.laboratorio;
        const votoComplessivo = req.body.votoComplessivo;
        const stato = req.body.stato;
        
        sql.query("insert into esame(idAppello,matricola,maxRisposte,risposteDate,maxVotoScritto,formula,orale,laboratorio,votoComplessivo,stato) values(?,?,?,?,?,?,?,?,?,?)",
        [idAppello,matricola,maxRisposte,risposteDate,maxVotoScritto,formula,orale,laboratorio,votoComplessivo,stato],function(err,result){
            if(err){
                callback(err,null);
                return;
            }
            callback(null,result);
            return;
        })
    })
}

function getAllEsame(req,callback){

    sql.connect(function(){
        console.log("RICHIESTA NEL MODEL: ",req);
        const idAppello = req.body;
        console.log("Ricerco l'esame con idAppello: ",idAppello);        
        sql.query("select * from esame where idAppello = ?",[idAppello],function(err,result){
            if(!result){
                callback(err,null);
            }
            callback(null,result);
        })
    })
}

module.exports = {esame,creaEsame,getAllEsame};