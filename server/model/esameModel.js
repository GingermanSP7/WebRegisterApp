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

function getCountEsame(req,callback){
    sql.connect(function(){
        sql.query("select count(*) as res from esame",function(err,result){
            if(!result){
                callback(err,null);
            }
            callback(null,result);
        })
    })
}

function getEsame(req,callback){
    sql.connect(function(){
        let idAppello = req.body.idAppello;
        let matricola = req.body.matricola;

        console.log("Connesso al DB, ricerca esame: ",idAppello+" -- "+matricola);
        sql.query("select * from esame where idAppello = ? and matricola = ?",[idAppello,matricola],function(err,result){
            if(!result){
                callback(err,null);
                return;
            }
            callback(null,result);
        })
    })
}

function updateEsame(req,callback){
    sql.connect(function(){
        let idAppello = req.body.idAppello;
        let matricola = req.body.matricola;
        let risposteDate = req.body.votoScritto;
        let maxRisposte = req.body.maxDomande;
        let maxVotoScritto = req.body.maxVotoScritto;
        let formula = req.body.formula;
        let orale = req.body.orale;
        let laboratorio = req.body.laboratorio;
        let votoComplessivo = req.body.votoComplessivo;
        let stato = req.body.stato;


        console.log("Connesso al DB, UPDTAE esame: ",idAppello+" -- "+matricola);
        sql.query("update esame set matricola = ?, risposteDate = ?, maxRisposte = ?, maxVotoScritto = ?, formula = ?, orale = ?, laboratorio = ?, votoComplessivo = ?, stato = ?",
        [matricola,risposteDate,maxRisposte,maxVotoScritto,formula,orale,laboratorio,votoComplessivo,stato],
        function(err,result){
            if(!result){
                callback(err,null);
                return;
            }
            callback(null,result);
        })
    })
}

module.exports = {esame,creaEsame,getAllEsame,getCountEsame,getEsame,updateEsame};