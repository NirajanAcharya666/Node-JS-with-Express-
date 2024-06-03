//import 
const express = require('express')
let app = express();

//create a server 
const port = 8000;

app.listen (port, ()=>{
    console.log('Server has started....');
})