const express = require('express');
const path = require('path');

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('Servidor funcionando')
})

app.listen(8081,()=>{
    console.log("Servidor en linea")
})