const sql = require("../database/dbConnection");

let studente = sql.query("create table if not exists studente( "+
    "matricola varchar(10) primary key,"+
    "nome varchar(25) not null,"+
    "cognome varchar(25) not null"+
    ")"
)
