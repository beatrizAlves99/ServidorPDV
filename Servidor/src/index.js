const express = require('express');
const status = require('http-status');

const app = express();
//Controlle e rotas
app.use(express.json());
app.use("/", require("./routers/route"));
app.use("/venda", require("./routers/rotaVenda"));
app.use("/fornecedor", require("./routers/rotaFornecedor"));
app.use("/produto",require("./routers/rotaProduto"));
app.use((req,res,next)=>{
    res.status(status.NOT_FOUND).send();
});
app.use((error,req,res,next)=>{
    console.log(error);
    res.status(status.INTERNAL_SERVER_ERROR).json({error});
});


//copnexão com o banco e subindo o servidor
const sequilize = require('./config/banco');
sequilize.sync({force:false}).then(()=>{
    app.listen(3000, ()=>{
        console.log("Está Funcionando");
        
    });
}).catch((error)=>{
    console.log(erro);
});