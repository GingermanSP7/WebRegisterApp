const sql = require("../database/dbConnection");

let esame = sql.query("create table if not exists esame ("+
    "idAppello bigint unsigned REFERENCES appello(idAppello),"+
    "matricola varchar(10) not null,"+
    "maxRisposte int unsigned not null,"+
    "risposteDate int unsigned not null,"+
    "orale int unsigned not null,"+
    "formula varchar(30),"+
    "votoComplessivo int unsigned not null,"+
    "stato varchar(20),"+
    "foreign key(matricola) references studente(matricola) on delete cascade,"+
    "foreign key(nome) references studente(nome) on delete cascade,"+
   " foreign key(cognome) references studente(cognome) on delete cascade,"+
    "primary key(idAppello,matricola)"+
   " )"
)

function creaEsame(req,callback){
    sql.connect(function(){
        const idAppello = req.body.nome;
        const matricola = req.body.matricola;
        const maxRisposte = req.body.maxRisposte;
        const risposteDate = req.body.risposteDate;
        const orale = req.body.orale;
        const formula = req.body.formula;
        const votoComplessivo = req.body.votoComplessivo;
        const stato = req.body.stato;
        
        sql.query("insert into esame(idAppello,matricola,maxRisposte,risposteDate,orale,formula,votoComplessivo,stato) values(?,?,?,?,?,?,?,?)",
        [idAppello,matricola,maxRisposte,risposteDate,orale,formula,votoComplessivo,stato],function(err,result){
            if(err){
                callback(err,null);
                return;
            }
            callback(null,result);
            return;
        })
    })
}

module.exports = {esame,creaEsame};