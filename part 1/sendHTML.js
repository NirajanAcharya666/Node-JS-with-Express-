//import 
const express = require('express')
let app = express();

//create a server 
const port = 8000;
app.get('/',(req,res)=>{
    res.status(200).send("Hello this is html file")
})
app.listen (port, ()=>{
    console.log('Server has started....');
})