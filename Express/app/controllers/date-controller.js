
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let date = (req, res) => {
  
  db.consultaDate(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    usuarios: result
  });
  
})
.catch((err) => {
  console.log(err);
});
};

let estudiante = (req, res) => {
  db.dateEstudiante(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    estudiante: result
  });
  
})
.catch((err) => {
  console.log(err);
});
};

module.exports = {
  date,
  estudiante,
  // imagen
}
