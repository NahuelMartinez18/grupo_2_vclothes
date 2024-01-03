const fs = require('fs');
const path = require('path');
const User = require('../models/user')
const bcryptjs=require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')




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
    processRegister: async (req,res)=>{
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }   
        
        let userInBd = User.findByField('email', req.body.email);
        
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
            profile: req.file.path.replace("public", "")
        }

        const product = await db.User.create(userToCreate)

        return res.redirect('/');
    },
    loginProcess: async (req,res) => {
        const userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.dataValues.password;
                req.session.userLogged = structuredClone(userToLogin.dataValues);
                return res.redirect('/profile')
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
