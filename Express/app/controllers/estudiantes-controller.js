
let db = require('../db/pg');

let estudiantes = (req, res) => {
  console.log(req.body);
    db.estudiantes(req.body)
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
  estudiantes
}