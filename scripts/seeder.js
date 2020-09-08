const db = require("../models");
const { exit } = require("process");

const dataToSeed = [
    {
        userId: 1,
        profilePicture: "https://64.media.tumblr.com/b91d7d1bf5b90c1856393b9a0bca6f03/54f93eb2c4a807f3-10/s250x400/de82b02d86ce6e08b2d0ecd578c055bbb8f64d2c.png",
        name: "My Name",
        status: "Isn't that just awesome?!",
        friends: 21,
        posts: 14,
        likes: 242,
        comments: 2,
        specialMember: true
    },
    {
        userId: 2,
        profilePicture: "https://64.media.tumblr.com/cc9333e472e30a56e2e0031f87edf61b/148e80b7b8d5e79c-67/s250x400/ccccfbce0636f188f64ca2e6f98182cbf51ea2f2.png",
        name: "Rin Wakabayashi",
        status: "Spending days and drinking tea!",
        friends: 45,
        posts: 128,
        likes: 510,
        comments: 41,
        specialMember: true
    },
    {
        userId: 3,
        profilePicture: "https://64.media.tumblr.com/7fb05329040cd23192885da961c1adef/tumblr_q6mv83n0rX1rpwm80o1_250.jpg",
        name: "古月 崎川",
        status: "開発が楽しくて嬉しいことですよ! よろしくお願いしま~す!",
        friends: 2,
        posts: 0,
        likes: 2,
        comments: 5,
        specialMember: true
    },
    {
        userId: 4,
        profilePicture: "https://64.media.tumblr.com/2891e59493138b838b276ac0514a0fd8/069c6bd7f52fa260-7c/s250x400/c4693245deb8bb7535a1cada1e3d87f0f99e6900.png",
        name: "Awesome Person",
        status: "Always trying to be awesome!!",
        friends: 23,
        posts: 11,
        likes: 34,
        comments: 93,
        specialMember: false
    }
];
db.sequelize.sync({ force: true }).then(() => {
    db.UsersDetails.bulkCreate(dataToSeed, { validate: true })
        .then(() => { console.log("Successfully added the values"); exit() })
})
    .catch(err => console.log(err));