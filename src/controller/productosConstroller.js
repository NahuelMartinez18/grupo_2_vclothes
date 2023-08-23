const productosController={

    listar:function(req,res){
        res.render('./products/modProduct')
    },

    crear:function(req,res){
        res.render('./products/formProduct')
    },

    detalle: function(req,res){
        res.render('./products/productDetail')
    },
    editar:function(req,res){
        res.send('editar producto')
    },

    shop: function(req,res){
        res.render('./products/productCart')
    }

}

module.exports=productosController;
