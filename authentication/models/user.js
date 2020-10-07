module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userId: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function (models) {
        User.hasMany(models.Token, {
            foreignKey: "associatedUser"
        });
    };

    return User;
};
