const express=require("express");
const router=express.Router();

Router.get("/signin",(req,res)=>{
    res.render("signIn");
});

