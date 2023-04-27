const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let listaAcudientes = async (req, res) => {
  
    db.acudientes()
    .then((result) => {
      return res.status(200).json({
        acudientes: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  listaAcudientes
}
