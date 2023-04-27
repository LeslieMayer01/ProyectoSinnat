const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let listaProductos = async (req, res) => {
  
    db.productos()
    .then((result) => {
      return res.status(200).json({
        productos: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  listaProductos
}