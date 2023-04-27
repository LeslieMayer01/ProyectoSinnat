const { check, validationResult } = require('express-validator');


validatorParams = [
  check('usuario').isString(),
  check('password').isLength({ min: 8, max: 15}),
  check('nombre').isString(),
  check('correo').isEmail(),
  check('telefono').isInt(),
  check('rol').isString()
  //check('estadoCuenta').default u
];

      
function validator(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(422).json({ errors: errors.array() });
        }
        next();
    };


    

module.exports = {
  validatorParams,
  validator
}



