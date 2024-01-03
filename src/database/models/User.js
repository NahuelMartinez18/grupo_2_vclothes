function user(sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            profile: {
                type: DataTypes.STRING(80),
                allowNull: false
            }
        },
        {
            tableName: 'user',
			timestamps: false
        }
    )

    return User
}

module.exports = user