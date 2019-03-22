const sequelize = require('sequelize');
const conSequelize = require('../config/banco');
const Produto = conSequelize.define('produto',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
},{tableName: 'produto'});

module.exports = Produto;
