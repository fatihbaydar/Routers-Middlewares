"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */


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


module.exports = [middleFunc1,middleFunc2]

/* ------------------------------------------------------- */