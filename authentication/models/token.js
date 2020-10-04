module.exports = function (sequelize, DataTypes) {
    const Token = sequelize.define("Token", {
        token: DataTypes.STRING
    });

    Token.associate = function (models) {
        Token.belongsTo(models.User);
    };

    return Token;
};
