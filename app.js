const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

app.use(morgan("tiny"));

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views"));

app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/appello/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));

//caricamento delle routes
app.use("/",require("./server/routes/route"))

app.listen(3000);
