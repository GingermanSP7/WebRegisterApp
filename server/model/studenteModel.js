const sql = require("../database/dbConnection");

let studente = sql.query("create table if not exists studente(matricola varchar(10) primary key, nome varchar(25) not null, cognome varchar(25) not null, cf varchar(16) not null, codCdsIscr varchar(3) not null, CFU int unsigned not null)");

function addStudente(req,callback){
    let matricola = req.body.matricola;
    let nome = req.body.nome;
    let cognome = req.body.cognome;
    let cf = req.body.cf;
    let codCdsIscr = req.body.codCdsIscr;
    let cfu = req.body.cfu;

    sql.connect(function(){
        console.log("Connected for ADD studente:", {matricola,nome,cognome});
        sql.query("insert into studente(matricola,nome,cognome,cf,codCdsIscr,cfu) values(?,?,?,?,?,?)",[matricola,nome,cognome,cf,codCdsIscr,cfu],function(err,result){
            if(!result){
                callback(err,null);
            }
            callback(null,result);
        })
    })
}

module.exports = {studente,addStudente};