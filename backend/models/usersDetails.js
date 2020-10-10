module.exports = function (sequelize, DataTypes) {
    return sequelize.define("UsersDetails", {
        userId: DataTypes.INTEGER,
        profilePicture: DataTypes.STRING,
        name: DataTypes.STRING,
        status: DataTypes.STRING,
        friends: DataTypes.INTEGER,
        posts: DataTypes.INTEGER,
        likes: DataTypes.INTEGER,
        comments: DataTypes.INTEGER,
        specialMember: DataTypes.BOOLEAN
    });
};