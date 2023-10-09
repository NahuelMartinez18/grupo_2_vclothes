const path =require('path');
const {body} = require('express-validator');

module.exports=[
    body('nombre').notEmpty().withMessage('tiene que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Tiene que escribir un correo electronico').bail()
        .isEmail().withMessage('debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('tiene que escribir una contrasenia')
]