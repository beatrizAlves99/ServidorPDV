const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/vendaControle");

routers.get("/",controllers.listarVenda);
routers.post("/",controllers.criarVenda);

module.exports = routers;