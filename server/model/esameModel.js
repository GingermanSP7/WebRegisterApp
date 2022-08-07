const sql = require("../database/dbConnection");

let esame = sql.query("create table if not exists esame ("+
    "idAppello bigint unsigned refereces appello(idAppello),"+
    "matricola varchar(10) not null,"+
    "nome varchar(25) not null,"+
    "cognome varchar(25) not null,"+
    "maxRisposte int unsigned not null check(maxRisposte>0 and maxRisposte<=30),"+
    "risposteDate int unsigned not null check(risposteDate>0 and rispsosteDate<=30),"+
    "orale int unsigned not null,"+
    "formula varchar(30),"+
    "votoComplessivo int unsigned not null,"+
    "stato varchar(20),"
)

module.exports = esame;