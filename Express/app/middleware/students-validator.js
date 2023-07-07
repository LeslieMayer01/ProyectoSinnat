const { check, validationResult } = require('express-validator');

validatorParams = [
    check('nombre').isString(),
    check('identificacion').isString(),
    check('edad').isInt(),
    check('fecha_nacimiento').isString(),
    check('ultimo_grado').isString(),
    check('escuela').isString(),
    check('referido').isString(),
    check('nombre_referido').isString(),
    check('horario_dia').isString(),
    check('horario_hora').isString(),
    check('acudiente').isString(),
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