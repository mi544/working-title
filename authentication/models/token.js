module.exports = function (sequelize, DataTypes) {
    const Token = sequelize.define("Token", {
        token: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    });

    Token.associate = function (models) {
        Token.belongsTo(models.User, {
            foreignKey: "associatedUser"
        });
    };

    return Token;
};
