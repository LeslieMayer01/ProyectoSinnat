let db = require('../db/pg');


let usuarios = async(req, res) => {

  console.log(req.query.id);
  let id= req.query.id
  db.deleteUser(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let estudiantes = async(req, res) => {
  console.log(req.query.id);
  let id= req.query.id

  db.deleteEstudiantes(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let acudientes = async(req, res) => {
  console.log(req.query.correo);
  let correo= req.query.correo

  db.deleteAcudientes(correo)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let productos = async(req, res) => {
  console.log(req.query.id);
  let id= req.query.id

  db.deleteProducto(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
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
