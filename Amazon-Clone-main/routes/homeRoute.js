const express = require('express');
const Router = express.Router();


Router.get('/',(req,res) => {
    res.render('index.ejs');
});

Router.get('/location', (req,res)=> {
    res.send("location")
});

Router.get('/return-order', (req,res) => {
    res.send("Return & Orders");
});

Router.get('/cart', (req,res) => {
    res.send("Cart");
});

Router.get('/todays-deals', (req,res) => {
    res.send("Todays Deals");
});

Router.get('/customer-service', (req,res) => {
    res.send("Customer Service");
});

Router.get('/registery', (req,res) => {
    res.send("Registery");
});

Router.get('/gift-cards', (req,res) => {
    res.send("Gift Cards");
});

Router.get('/sell', (req,res) => {
    res.send("Sell");
});
module.exports = Router