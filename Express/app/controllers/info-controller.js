const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let usuarios = async (req, res) => {
  
    db.usuariosInfo()
    .then((result) => {
      return res.status(200).json({
        usuarios: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};
let estudiantes = async (req, res) => {
  console.log("llegue y me fui")
  db.estudiantesInfo()
  .then((result) => {
    return res.status(200).json({
      estudiantes: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};


let acudientes = async (req, res) => {
  
  db.acudientesInfo()
  .then((result) => {
    return res.status(200).json({
      solicitudes: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};


let productos = async (req, res) => {
  
  db.productosInfo()
  .then((result) => {
    return res.status(200).json({
      publicidades: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};






module.exports = {
  usuarios,
  estudiantes,
  acudientes,
  productos
}