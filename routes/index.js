"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

//* express.Router()
// const express = require("express")
// const router = express.Router()
const router = require("express").Router() // yukardaki ikili böyle tekli olarak da kullanılabilir.

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

module.exports = router
