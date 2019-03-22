const Venda = require("../models/venda");
const status = require("http-status");



exports.criarVenda = (req,res,next)=>{
    let venda = req.body;
    Venda.create(venda).then((novaVenda)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};


exports.listarVenda = (req,res,next)=>{
    Venda.findAll({attributes: ["id", "quantidade","valor"]}).then((vendas)=>{
        res.status(status.OK).send(vendas);
    }).catch((error)=>{
        next(erro);
    });

};