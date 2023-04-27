let db = require('../db/pg');


let addEstudiantes = (req,res)=>{
  console.log(req.body);

  db.addEstudiantes(req.body)
  .then((result) => {
    return res.status(200).json({
      status: "register ok",
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

 
module.exports = {
  addEstudiantes
}
