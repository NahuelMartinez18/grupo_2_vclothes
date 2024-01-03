const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const db = require('../database/models')


function getProducts() {
	/*transforma la base de datos en un objeto iterable*/
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const productosController={
    //Listado de productos
    index: async (req, res) => {
        const products = await db.Prenda.findAll()
        return res.render('./users/index', { products: products })
    },
    //Formulario de creación de productos
    create: (req,res)=>{
            res.render('./products/formProduct.ejs')
    },    
    //Detalle de un producto particular
    detail: async (req,res) => {
        const id_param = req.params.id;
        const product = await db.Prenda.findOne({
            where: {
                id: id_param
            },
            include: [
                {association: 'color'}
            ]
        })
        return res.render("../views/products/productDetail.ejs", { product: product })
    },
    //Acción de creación (a donde se envía el formulario)
    store: async (req,res)=>{
        const colors = await db.Color.findOrCreate({
            where: {
                name_color: req.body.color
            }
        })

        const nuevoProducto = {
            name: req.body.name,
            description: req.body.description,
            id_color: colors[0].id,
            talle: req.body.talle,
            precio: req.body.precio,
			image: req.file.filename,
        }

        const pruduct = await db.Prenda.create(nuevoProducto)
        return res.redirect('/')
    },
    //Formulario de edición de productos
    edit: async (req,res)=>{
        const id_param = req.params.id;

        const product = await db.Prenda.findOne({
            where: {
                id: id_param
            },
            include: [
                {association: 'color'}
            ]
        })
		
		return res.render("./products/modProduct.ejs", { product: product })
    },
    //Acción de edición (a donde se envía el formulario):
    update: async (req,res)=>{
        const id_param = req.params.id;

        const color = await db.Color.findOrCreate({
            where: {
                name_color: req.body.color
            }
        })

        const update_product = {
            name: req.body.name,
            description: req.body.description,
            talle: req.body.talle,
            precio: req.body.price,
            id_color: color[0].id
        }

        const product = await db.Prenda.update(
            update_product,
            {
                where: {
                    id: id_param
                }
            }
        )

        return res.redirect("/")
    },
    //Acción de borrado
    destroy: async (req,res)=>{
        const id_param = req.params.id;

        const product = await db.Prenda.destroy({
            where: {
                id: id_param
            }
        })
        
        return res.redirect("/");
    },
    
}

module.exports=productosController;
