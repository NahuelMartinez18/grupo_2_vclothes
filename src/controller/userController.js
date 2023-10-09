const fs = require('fs');
const path = require('path');
const User = require('../models/user')
const bcryptjs=require('bcryptjs');
const { validationResult } = require('express-validator');



const userController={
    index:(req,res)=>{
        return res.redirect('/');
    }
    ,   
    login: (req,res)=>{
        return res.render('users/login');
    },
    register: (req,res)=>{
        return res.render('users/register')
    },
    processRegister: (req,res)=>{
         const resultValidation = validationResult(req);
         if(resultValidation.errors.length > 0){
            return res.render('/users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
         }   
        let userInBd=User.findByField('email',req.body.email);
        
        if(userInBd){
            return res.render('users/register',{
            errors:{
                email:{
                    msg:'este email ya esta registrado'
                }
            },
            oldData:req.body
            });
        }
        let userToCreate = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password,10),
            profile: req.file.filename
        }
        let userCreated=User.create(userToCreate);
        return res.redirect('/user');
    },
    loginProcess:(req,res)=>{
        let userToLogin=User.findByField('email',req.body.email);
        
        if(userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/user/profile')
            }
            return res.render('users/login',{
                errors: {
                    email:{
                        msg: 'credencial invalida'
                    }
                }
            });

            
        }
        return res.render('users/login',{
            errors: {
                email:{
                    msg: 'no se encuentra registrado'
                }
            }
        });
        
    },
    profile: (req,res)=>{
        return res.render('users/profile',{user : req.session.userLogged});
    },
    logout: (req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
    
}

module.exports=userController;
