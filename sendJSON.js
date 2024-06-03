//import 
const express = require('express')
let app = express();

//create a server 
const port = 8000;
app.get('/',(req,res)=>{
    res.status(200).json({message:"hello this is json", status:200})
})
app.listen (port, ()=>{
    console.log('Server has started....');
})