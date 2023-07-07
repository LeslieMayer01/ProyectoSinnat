const { check, validationResult } = require('express-validator');

validatorParams = [
    check('nombre').isString(),
    check('apellido').isString(),
    check('cedula').isString(),
    check('correo').isString(),
    check('direccion').isString(),
    check('telefono').isString(),
    check('forma_pago').isString(),
];

function validator(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });
    }
    next();
}

module.exports = {
  validatorParams,
  validator
}