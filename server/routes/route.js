const express = require("express");
const services = require("../services/api");
const route = express.Router();

/**
 * @Description route homepage
 * @method GET/
 */
route.get("/",(req,res)=>{
    res.render("index");
})

/**
 * @Description route visualizza appelli
 * @method GET/visualizzaAppelli
 */
 route.get("/visualizzaAppelli",(req,res)=>{
    res.render("visualizzaAppelli");
})


/**
 * @Description route crea appello
 * @method GET/creaAppello
 */
 route.get("/creaAppello",(req,res)=>{
    res.render("creaAppello");
})

/**
 * @Description route tesisti
 * @method GET/tesisti
 */
 route.get("/tesisti",(req,res)=>{
    res.render("tesisti");
})

/**
 * @Description route progettisti
 * @method GET/progettisti
 */
 route.get("/progettisti",(req,res)=>{
    res.render("progettisti");
})





module.exports = route;