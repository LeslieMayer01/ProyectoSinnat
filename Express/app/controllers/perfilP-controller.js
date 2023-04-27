
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/pg');

let perfilP = (req, res) => {
  
  db.consultaUser(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    usuarios: result
  
})
 })
.catch((err) => {
  console.log(err);
});
};

module.exports = {
  perfilP,
}
