const Fornecedor = require("../models/fornecedor");
const status = require("http-status");

exports.criarFornecedor = (req,res,next)=>{
    let fornecedor = req.body;
    Fornecedor.create(fornecedor).then((novoForn)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarFornecedor = (req,res,next)=>{
    Fornecedor.findAll({attributes: ["id", "nome"]}).then((fornecedores)=>{
        res.status(status.OK).send(fornecedores);
    }).catch((erro)=>{
        next(erro);
    });
};