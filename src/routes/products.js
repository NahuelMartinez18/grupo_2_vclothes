const express =require('express');
const router=express.Router();
const upload=require('../middlewares/multer')

const mainController=require('../controller/mainController');
const productosController=require('../controller/productosConstroller')

router.get('/', mainController.index);

router.get('/create', productosController.create);

router.post('/products', upload.single('vistaProd'), productosController.store);

router.get('/detalleProd/:id/',productosController.detail);

router.get('/edit/:id',productosController.edit);

router.put('/edit/:id',productosController.update);

router.delete('/delete/:id', productosController.destroy);

//router.get('/productCart',productoController.shop);

module.exports=router;
