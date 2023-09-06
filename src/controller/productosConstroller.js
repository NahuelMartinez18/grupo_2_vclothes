const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let cont=14;

function getProducts() {
	/*transforma la base de datos en un objeto iterable*/
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const productosController={
    //Listado de productos
    index: (req,res)=>{
        const products=getProducts();
        return res.render('./users/index',{products})
    },
    //Formulario de creación de productos
    create: (req,res)=>{
            res.render('./products/formProduct.ejs')
    },    
    //Detalle de un producto particular
    detail: (req,res)=>{
        res.send('dd')
    },
    //Acción de creación (a donde se envía el formulario)
    store: (req,res)=>{
        cont=cont++
        let productNew={
            id: cont++,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            discount: req.body.descount,
            price: req.body.price,
            category: req.body.category
        }
        let products=fs.readFileSync(getProducts);
        let productsJson
        if(products==[]){
            let productsList = []
        }else{
            let productsList=JSON.parse(products)
        }
        productsList.push(productNew)

        
         productsJson=Json.stringify(productsList)

        fs.writeFileSync('productsJson',productsJson)

        res.send('dd')
    },
    //Formulario de edición de productos
    edit: (req,res)=>{
        res.send('dd')
    },
    //Acción de edición (a donde se envía el formulario):
    update: (req,res)=>{
        res.send('dd')
    },
    //Acción de borrado
    destroy: (req,res)=>{
        res.send('dd')
    },
    
}

module.exports=productosController;
