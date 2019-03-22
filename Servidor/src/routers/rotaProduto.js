const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/prondutoControle");

routers.get("/",controllers.listarProduto);
routers.post("/",controllers.criarProduto);

module.exports = routers;