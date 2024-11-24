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
// const router = express.Router()

// router.get("/", (req,res) =>{res.send({message:"get isteği"})} )
// router.post("/", (req,res) =>{res.send({message:"post isteği"})} )
// router.put("/", (req,res) =>{res.send({message:"put isteği"})} )
// router.delete("/", (req,res) =>{res.send({message:"delete isteği"})} )
// router.all("/", (req,res) =>{res.send({message:"all da yapabilir"})} )

// router.route("/")
// .get((req,res) =>{res.send({message:"get isteği"})} )
// .post((req,res) =>{res.send({message:"post isteği"})} )
// .put((req,res) =>{res.send({message:"put isteği"})} )
// .delete((req,res) =>{res.send({message:"delete isteği"})} )
// .all((req,res) =>{res.send({message:"all da yapabilir"})} )


// app.use(router) // app'e router kullanıldığını haberdar etmek gerek. bu isteklerin sonunda olabileceği gibi başında da olabilir.

/* ------------------------------------------------------- */
//!yukardakilerin olmadığı ve bunların routes içindeki index.js dosyasında olduğu durumlarda, router ayarlarını /routes/index.js dosyasından al:
// const router = require("./routes/index.js") 1.yol
// const router = require("./routes/index")    2.yol
// const router = require("./routes/") //      3.yol: eğer dosya ismi index.js ise böyle de olur, varsayılan ayarı şndex.jstir. ancak dosya ismi farklıysa buraya belirtmek gerek.

// app.use(router)                           //1.yol yukardakilerden biri ile beraber böyle kullanılabilir
app.use(require("./routes"))                 //2.yol ikisini tek satırda da yazabiliriz.
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));