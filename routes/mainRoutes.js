const express=require('express');
const router=express.Router();

const mainController=require('../controller/mainController');


router.get('/cargaProducto',mainController.cargaProducto);
router.get('/modProducto',mainController.modificarProducto);

module.exports=router;