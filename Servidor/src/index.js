const express = require('express');
const status = require('http-status');

const app = express();



//copnexão com o banco e subindo o servidor
const sequilize = require('./config/banco');
sequilize.sync({force:false}).then(()=>{
    app.listen(3000, ()=>{
        console.log("Está Funcionando");
        
    });
}).catch((error)=>{
    console.log(erro);
});