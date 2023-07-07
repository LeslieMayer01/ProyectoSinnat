
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let repository = require('../db/login-repository');

let login = async (req, res) => {
  repository.login(req.body)
  .then((result)=>{
    if (result == 0) {
      return res.status(401).send({
        status: 'authentication failed',
        auth: false
      });
    }
    
    //if (!bcrypt.compareSync(password, result[0].password)) {
    //  return res.status(401).send({ status: 'authentication failed', auth: false}
    //  );
    //};
    
    let jwt = nJwt.create({usuario:result[0].usuario, idadmin: result[0].idadmin  },KEY.SIGNING_KEY);
    jwt.setExpiration(new Date().getTime() + (2* 60 * 1000));
    let token = jwt.compact();

    return res.status(200).json({
      token: token
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  login
}
