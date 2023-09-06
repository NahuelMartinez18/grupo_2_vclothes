const express =require('express');
const router=express.Router();

const productosController=require('../controller/productosConstroller')

router.get('/',productosController.index);

router.get('/create', productosController.create);

// router.get('/detalleProd',productoController.detalle);

// router.get('/listar',productoController.listar);

// router.get('/formProd',productoController.crear);

// router.get('/editProd',productoController.editar);

// router.get('/productCart',productoController.shop);

module.exports=router;
