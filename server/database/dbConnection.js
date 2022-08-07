const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    database: "registro",
    user: "root",
    password: ""
})

connection.connect(function(error){
    if(error){
        console.log("Errore connessione al Database");
        throw error;
    }else{
        console.log("Connessione al Database avvenuta con successo!");
    }
})

module.exports = connection;