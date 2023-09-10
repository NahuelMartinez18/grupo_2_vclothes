const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');


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
        const id = req.params.id;
		const products = getProducts()
		const productoEncontrado = products.find(product => product.id == id);
		return res.render("./products/productDetail.ejs", { product: productoEncontrado})
    },
    //Acción de creación (a donde se envía el formulario)
    store: (req,res)=>{
        const products=getProducts();
        const newId=products[products.length - 1].id + 1;
        const nuevoProducto={
            id: newId,
            nombre: req.body.name,
			category:req.body.category,
            description: req.body.description,
            color:req.body.color,
            talle:req.body.talle,
            price: req.body.price,
			image: req.file.filename,
        }
        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2));
        return res.redirect('/products')
    },
    //Formulario de edición de productos
    edit: (req,res)=>{
        const id = req.params.id;
		const products = getProducts()
		const productoEncontrado = products.find(product => product.id == id);
		return res.render("./products/modProduct.ejs", { product: productoEncontrado})
    },
    //Acción de edición (a donde se envía el formulario):
    update: (req,res)=>{
        const products = getProducts();

        const id = req.params.id;

        products.forEach(prod => {
            if(prod.id == id) {
                prod.nombre= req.body.name;
                prod.category=req.body.category;
                prod.description= req.body.description;
                prod.color=req.body.color;
                prod.talle=req.body.talle;
                prod.price= req.body.price;
                return;
            }
        });       
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2)); 

        return res.redirect("/products")
    },
    //Acción de borrado
    destroy: (req,res)=>{
        let products = getProducts();

        const id=req.params.id;

        products=products.filter(producto=>producto.id != id);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2)); 
       
        return res.redirect("/products");
    },
    
}

module.exports=productosController;
