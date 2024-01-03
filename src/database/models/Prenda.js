function prenda(sequelize, DataTypes) {
    const Prenda = sequelize.define(
        'Prenda',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            image: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            talle: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            precio: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_color: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'prenda',
			timestamps: false
        }
    )
    
    Prenda.associate = (models) => {
        Prenda.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'id_color'
        })
    }

    return Prenda
}

module.exports = prenda