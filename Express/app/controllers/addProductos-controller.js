let db = require('../db/pg');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let addProductos = async(req, res) => {
  console.log(req.body) 
  let sleep = await sleepTime(3000);
  

    db.addProductos(req.body)
  .then((result) => {
    return res.status(200).json({
      status: 'publicado',
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
module.exports = {
  addProductos
}
