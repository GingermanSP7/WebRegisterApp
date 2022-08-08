const multer = require("multer");
const fs = require("fs");

let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0,10);

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./server/helper/appelli/"+date);
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({storage: fileStorageEngine});

module.exports = upload;