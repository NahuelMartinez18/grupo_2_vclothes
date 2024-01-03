const express=require('express');
const router=express.Router();

const userRoutes=require('./usersRoutes')
const rutasProductos=require('./products');

// router.use('/',mainController.index);
router.use('/',userRoutes);
router.use('/',rutasProductos);

module.exports=router;