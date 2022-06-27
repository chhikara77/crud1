import express from "express";
//const express = require("express");
import userRoutes from "./routes/users.js";

const app = express();

app.get('/',(req,res)=>{
    res.send("hello fro m homepage");
});

app.use(express.json());
app.use('/users',userRoutes)
app.listen(5000);