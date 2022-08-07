const sql = require("../database/dbConnection");

let appello = sql.query("create table if not exists appello ("+
    "idAppello bigint unsigned primary key AUTO_INCREMENT,"+
    "nome varchar(10) not null"
)