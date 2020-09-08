module.exports = function (sequelize, DataTypes) {
    return sequelize.define("UsersDetails", {
        UserId: DataTypes.INTEGER,
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