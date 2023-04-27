const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let listaEstudiantes = async (req, res) => {
  
    db.estudiantes()
    .then((result) => {
      return res.status(200).json({
        estudiantes: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  listaEstudiantes
}