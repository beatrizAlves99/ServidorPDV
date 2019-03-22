const Produto = require("../models/produto");
const status = require("http-status");

exports.criarProduto = (req,res,next)=>{
    let produto = req.body;
    Produto.create(produto).then((novoProduto)=>{
        res.status(status.create).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarProduto = (req,res,next)=>{
    Venda.findAll({attributes: ["id", "nome"]}).then((produtos)=>{
        res.status(status.OK).send(produtos);
    }).catch((erro)=>{
        next(erro);
    });
};