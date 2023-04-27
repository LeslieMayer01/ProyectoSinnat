
let db = require('../db/pg');

let productos = (req, res) => {
  console.log(req.body);
    db.productos(req.body)
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
  productos
}