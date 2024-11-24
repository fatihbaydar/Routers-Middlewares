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

// app.get("/", (req, res, next) => {
//   if (req.query.username == "baydar") {

//!req veya res ile veri taşıma
// req.username = "baydar";
// res.message ="çalışmak geliştirir"
// next(); // doğru is bir sonraki route'a geç
//   } else {
//     res.send({
//       message: "Hata: Kullanıcı adı yanlış",
//     });
//   }
// });

// app.get("/", (req, res) => {
//   res.send({
//     username: req.username,
//     // message: "Hoş geldiniz",
//     message:res.message
//   });
// });

/* ------------------------------------------------------- */

//? Çoklu Middlewares
// app.get("/", (req,res,next) =>{
//     req.message1= "middleware 1 çalıştı"
//     next()
// })

// app.get("/", (req,res,next) =>{
//     req.message2= "middleware 2 çalıştı"
//     next()
// })

// app.get("/", (req,res,next) =>{
//     req.message3= "middleware 3 çalıştı"
//     next()
// })

// app.get("/", (req,res,next) =>{
//     req.message4= "middleware 4 çalıştı"
//     next()
// res.send({ //!res.sendi buraya ekleyip next'i kapatıp çıktı alabiliriz. ancak 5'i vermez.
//     message1:req.message1,
//     message2:req.message2,
//     message3:req.message3,
//     message4:req.message4,
//     message5:req.message5,
//     message:"bitti"
// })

// })

// app.get("/", (req,res,next) =>{
//     req.message5= "middleware 5 çalıştı"
//     next()
// })

// app.get("/", (req,res) =>{
//     res.send({
//         message1:req.message1,
//         message2:req.message2,
//         message3:req.message3,
//         message4:req.message4,
//         message5:req.message5,
//         message:"bitti"
//     })

// })

const middleFunc1 = (req, res, next) => {
  console.log("middleFunc1 çalıştı");
  req.message1 = "middleFunc1 çalıştı";
  next();
};

const middleFunc2 = (req, res, next) => {
  console.log("middleFunc2 çalıştı");
  req.message2 = "middleFunc2 çalıştı";
  next();
};

// app.use("/", middleFunc1) //! url yazılırsa sadece o url için geçerlli
// app.use(middleFunc1, middleFunc2); //! url yazılmazsa hepsinde geçerli. mesaj consola yansır. app.use bütün metdolarda geçerli.

//* Alternatif
// app.get("/", [middleFunc1, middleFunc2]) //! get metodu kullanılırsa sadece get isteğinde çalışır.

// app.get("/home", (req, res) => {
//   res.send({
//     message1: req.message1,
//     message2: req.message2,
//     message: "Bitti",
//   });
// });

//? app.use() kullanmadan middleware çağırılması:

app.get("/home", middleFunc1, middleFunc2, (req, res) => {
    res.send({
      message1: req.message1,
      message2: req.message2,
      message: "Bitti",
    });
  });





/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
