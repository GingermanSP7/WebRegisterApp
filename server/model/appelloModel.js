const sql = require("../database/dbConnection");

let appello = sql.query("create table if not exists appello ("+
    "idAppello bigint unsigned primary key AUTO_INCREMENT,"+
    "nomeAppello varchar(10) not null)"
)

let creaAppello = function(req){
    // la richiesta al db arriva con successo!
    // console.log("RICHIESTA INVIATA AL DB: ",req);
    sql.connect(function(){
        var nomeAppello = req.body.nomeAppello;
        console.log("Connected for add appello! name of appello: "+nomeAppello);
        sql.query('insert into appello(nomeAppello) values(?)',[nomeAppello],function(error,result){
            if(error) {
                console.log(error);
                return false;
            }
            console.log("appello inserito!");
            return true;
        });
    })
}

function getAllAppelli(data, callback){
    sql.connect(function(){
        console.log("Connected for GET appelli!");
        sql.query('select * from appello',callback,function(error,result){
            if(error) {
                callback(error,null);
            }
            callback(null,result);
        });
    })
}

function getAppello(req,callback){
    sql.connect(function(){
        console.log("Connected for GET appello.. Searching id:"+req.query.id);       
        sql.query('select * from appello where idAppello = ?',[req.query.id],function(error,result){
            if(error) {
                callback(error,null);
            }
            callback(null,result);
        });
    })
}

function updateAppello(req,callback){
    const idAppello = req.params.idAppello;
    const nomeAppelloUpdated = req.body.nomeAppello;

    sql.connect(function(){
        console.log("Connected for UPDATE Appello");       
        sql.query('update appello set nomeAppello = ? where idAppello = ?',[nomeAppelloUpdated,idAppello],function(error,result){
            if(error) {
                callback(error,null);
            }
            console.log("RESULT: ",result)
            callback(null,result);
        });
    })
}

function deleteAppello(req,callback){
    const idAppello = req.params.idAppello;

    sql.connect(function(){
        console.log("Connected for DELETE element with id: ",idAppello);
        sql.query("delete from appello where idAppello = ?",[idAppello],function(err,result){
            if(err){
                callback(err,null);
                return;
            }
            callback(null,result);
            return;
        })
    })
}

module.exports = {appello,creaAppello,getAllAppelli,getAppello,updateAppello,deleteAppello};