const { check, validationResult } = require('express-validator');


validatorParams = [
        check('user').isUsuario(),
        check('pass').isLength({ min: 8, max: 15})
      ];

      
function validator(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          
          return res.status(422).json({ errors: errors.array() });
        }
        next();
    };


module.exports = {
  validatorParams,
  validator
}



