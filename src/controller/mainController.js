
const mainController = {

    index:function(req,res){
        res.render('./users/index')
    },

    login:function(req,res){
        res.render('./users/login')
    },

    register:function(req,res){
        res.render('./users/register')
    },

};

module.exports= mainController;