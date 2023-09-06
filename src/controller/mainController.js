const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath , 'utf-8'));

const mainController = {
    index:(req,res)=>{
        return res.render('./users/index',{products})
    },

    login:function(req,res){
        res.render('./users/login')
    },

    register:function(req,res){
        res.render('./users/register')
    },

};

module.exports= mainController;