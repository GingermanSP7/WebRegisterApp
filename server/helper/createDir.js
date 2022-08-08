const fs = require("fs");

let createDirForPrenotati = function(req,res,next){
    let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0,10);
    let dir = "./server/helper/appelli/"+date;

    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        next();
    }
    next();
}

module.exports = {createDirForPrenotati};