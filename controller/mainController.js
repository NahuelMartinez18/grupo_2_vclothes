
const controller = {
    index: (req,res)=>{},

    cargaProducto: (req, res)=>{
        return res.render('formProduct')
    },
    modificarProducto:(req,res)=>{
        let prod =[
            {
                name: "remera adida",
                description: "remera con rayas y marcas",
                category: 456,
                color: 'azul',
                talle: 1,
                precio: 12000,
                vistaProd: "xxx",
        },
        {
            name: "remera telles",
            description: "remera con rayas y marcas",
            category: 456,
            color: 'azul',
            talle: 1,
            precio: 12000,
            vistaProd: "xxx",
        },
        {
            name: "remera puma",
            description: "remera con rayas y marcas",
            category: 456,
            color: 'azul',
            talle: 1,
            precio: 12000,
            vistaProd: "xxx",
        }
        ]
        return res.render('modProduct',{"prod":prod})
    }
};

module.exports= controller;