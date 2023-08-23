const express =require('express');
const router=express.Router();

const productoController=require('../controller/productosConstroller.js')

router.get('/detalleProd',productoController.detalle);

router.get('/listar',productoController.listar);

router.get('/formProd',productoController.crear);

router.get('/editProd',productoController.editar);

router.get('/productCart',productoController.shop);

module.exports=router;
