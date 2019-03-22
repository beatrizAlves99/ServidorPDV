const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/fornecedorControle");

routers.get("/",controllers.listarFornecedor);
routers.post("/",controllers.criarFornecedor);

module.exports = routers;