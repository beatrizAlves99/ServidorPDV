const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Empresa = conSequelize.define('empresa',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    razao: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    webSite: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
    docs: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
},{tableName: 'empresa'});

const Contato = require("./contato");
Empresa.belongsToMany(Contato, {through: 'ContatoEmp'});
Contato.belongsToMany(Empresa, {through: 'ContatoEmp'});


module.exports = Empresa;