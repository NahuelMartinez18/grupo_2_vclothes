const db = require('../database/models');


const mainController = {
    index: async (req,res)=>{
        const products = await db.Prenda.findAll({
            include: [
                {association: 'color'}
            ]
        })
        return res.render('./users/index',{ products })
    }
};

module.exports= mainController;