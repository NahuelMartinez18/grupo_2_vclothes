function color(sequelize, DataTypes) {
    const Color = sequelize.define(
        'Color',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name_color: {
                type: DataTypes.STRING(40),
                allowNull: false
            }
        },
        {
            tableName: 'color',
			timestamps: false
        }
    )
    
    Color.associate = (models) => {
        Color.hasMany(models.Prenda, {
            as: 'prendas',
            foreignKey: 'id_color'
        })
    }

    return Color
}

module.exports = color