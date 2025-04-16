// const express = require('express');
// const app = require('express');
// // const homeRoute = require('./routes/homeRoute');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');

// //app.use(express.static('public'));
// //app.use(express.urlencoded({extended: true}));
// //app.set("view engine","ejs");
// const port=4000;

// app.get('/', (req, res) => {
//     console.log("hello");
//     res.send("Hello from Amazon Clone!");
// });

// //app.use('/',homeRoute);

// app.listen(port, ()=>{
//     console.log(`Server is running on the port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    console.log("hello");
    res.send("Hello from Amazon Clone!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
