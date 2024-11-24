"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware fonksiyonlarının 3 tane parametresi olur.
//? Son parametre next().

// app.get("/", (req,res,next) => {
//     console.log("middleware çalıştı")
//     next()
// })

//route path:
// app.get("/", (req,res) => {
//     console.log("route çalıştı")
//     res.send({
//         message:"kod bitti"
//     })
// })

/* ------------------------------------------------------- */

app.get("/", (req, res, next) => {
  if (req.query.username == "baydar") {

    //!req veya res ile veri taşıma
    req.username = "baydar";
    res.message ="çalışmak geliştirir"
    next(); // doğru is bir sonraki route'a geç
  } else {
    res.send({
      message: "Hata: Kullanıcı adı yanlış",
    });
  }
});

app.get("/", (req, res) => {
  res.send({
    username: req.username,
    // message: "Hoş geldiniz",
    message:res.message
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
