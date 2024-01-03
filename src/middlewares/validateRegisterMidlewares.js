const {body} = require('express-validator');

module.exports=[
    body('nombre')
        .notEmpty().withMessage('tiene que escribir un nombre').bail()
        .isLength(3,50).withMessage('Tiene que tener entre 3 y 50 caracteres'),
    body('email')
        .notEmpty().withMessage('Tiene que escribir un correo electronico').bail()
        .isEmail().withMessage('debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('tiene que escribir una contrasenia')
]