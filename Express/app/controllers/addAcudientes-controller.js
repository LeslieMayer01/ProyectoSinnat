let db = require('../db/pg');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let addAcudientes = async(req, res) => {
  console.log(req.body) 
 
db.addAcudientes(req.body)
  .then((result) => {
    return res.status(200).json({
      status: 'register ok',
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
module.exports = {
  addAcudientes
}
