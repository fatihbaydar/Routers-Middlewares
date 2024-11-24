"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" ExpressJS te URL kontrolü için özel bir uygulamadır.

// app.get("/welcome", (req,res)=> {
//     res.send({
//         message:"Welcome"
//     })
// })

//* express.Router()
const router = express.Router()

// router.get("/", (req,res) =>{res.send({message:"get isteği"})} )
// router.post("/", (req,res) =>{res.send({message:"post isteği"})} )
// router.put("/", (req,res) =>{res.send({message:"put isteği"})} )
// router.delete("/", (req,res) =>{res.send({message:"delete isteği"})} )
// router.all("/", (req,res) =>{res.send({message:"all da yapabilir"})} )

router.route("/")
.get((req,res) =>{res.send({message:"get isteği"})} )
.post((req,res) =>{res.send({message:"post isteği"})} )
.put((req,res) =>{res.send({message:"put isteği"})} )
.delete((req,res) =>{res.send({message:"delete isteği"})} )
.all((req,res) =>{res.send({message:"all da yapabilir"})} )


app.use(router) // app'e router kullanıldığını haberdar etmek gerek. bu isteklerin sonunda olabileceği gibi başında da olabilir.



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));