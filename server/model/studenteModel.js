const sql = require("../database/dbConnection");

let studente = sql.query("create table if not exists studente(Matricola varchar(10) primary key, Nome varchar(25) not null, Cognome varchar(25) not null, cf varchar(16) not null, codCdsIscr varchar(5) not null,Regolamento varchar(9) not null, cfu varchar(2) not null)");

function addStudente(req,callback){
    let matricola = req.body.matricola;
    let nome = req.body.nome;
    let cognome = req.body.cognome;
    let cf = req.body.cf;
    let codCdsIscr = req.body.codCdsIscr;
    let regolamento = req.body.regolamento;
    let cfu = req.body.cfu;

    sql.connect(function(){
        // console.log("Connected for ADD studente:", {matricola,nome,cognome});
        sql.query("insert into studente(Matricola,Nome,Cognome,cf,codCdsIscr,Regolamento,cfu) values(?,?,?,?,?,?,?)",[matricola,nome,cognome,cf,codCdsIscr,regolamento,cfu],function(err,result){
            if(!result){
                callback(err,null);
            }
            callback(null,result);
        })
    })
}

function getAllStudente(req,callback){
    sql.connect(function(){
        // console.log("Connected for ADD studente:", {matricola,nome,cognome});
        sql.query("select * from studente",function(err,result){
            if(!result){
                callback(err,null);
            }
            callback(null,result);
        })
    })
}

module.exports = {studente,addStudente,getAllStudente};