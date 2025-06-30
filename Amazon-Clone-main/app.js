    express = require("express");
    var app = express();
    const homeRoute = require('./routes/homeRoute');
    const bodyParser = require('body-parser');
    //const mongoose = require('mongoose');
    const port=4000;
    
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.set("view engine","ejs");
    app.set('views', __dirname + '/views');

    
    app.use('/',homeRoute);
    
    
    app.listen(port, ()=>{
        console.log(`Server is running on the port ${port}`);
    });
