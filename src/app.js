// ************ Require's ************
const express = require("express");
const session=require('express-session')


const path = require("path");
const PORT = process.env.PORT || 3000;
const methodOverride =  require('method-override'); 

// ************ express() - (don't touch) ************
const app = express();

const userLoggedMidleware=require('./middlewares/userLoggedMidleware');
// ************ Middlewares - (don't touch) ************
app.use(session({
    secret: 'its a secret',
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMidleware);

app.use(express.static(path.join(__dirname, '..','public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
// ************ Template Engine - (don't touch) ************
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"))

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRoutes=require('./routes/mainRoutes');
const userRoutes=require('./routes/usersRoutes')
const rutasProductos=require('./routes/products');


 app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/products',rutasProductos);




app.listen(PORT, () => console.log("Servidor corriendo en el puerto:" + PORT));

