const express=require('express');

const router=express.Router();

const upload=require('../middlewares/profile-multer')

const userController=require('../controller/userController');

//middlewares

const uploadFile=require('../middlewares/profile-multer');

 const validations=require('../middlewares/validateRegisterMidlewares');

const guestMidlewares=require('../middlewares/guestMidlewares');

const authMiddlewares=require('../middlewares/authMiddlewares');
 //
 router.get('/',userController.index);

 router.get('/login',guestMidlewares,userController.login)

router.get('/register',guestMidlewares,userController.register);

router.post('/',upload.single('profile'),validations,userController.processRegister);

router.post('/login',userController.loginProcess)
router.get('/profile',authMiddlewares,userController.profile);

router.get('/logout',userController.logout);

module.exports=router;