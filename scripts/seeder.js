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
    },
    {
        userId: 5,
        profilePicture: "https://64.media.tumblr.com/e1da5977fed8776b55dd5f1f23c47699/29c6bcf4442300ee-04/s250x400/ef6d23c4981d0246cf9987853274a833dea539c7.png",
        name: "Freedom Dive",
        status: "Let's go get something to eat!",
        friends: 895,
        posts: 1,
        likes: 9242,
        comments: 0,
        specialMember: false
    },
    {
        userId: 6,
        profilePicture: "https://64.media.tumblr.com/662ff2b9bb3bd57186d93f460e632fc7/96f4e5b00624fb85-27/s250x400/e38b53e869bec7681a709ed5fafaabdbb8fb63ba.png",
        name: "Super Sayan",
        status: "Even further beyond",
        friends: 423,
        posts: 254,
        likes: 2331,
        comments: 263,
        specialMember: false
    },
    {
        userId: 7,
        profilePicture: "https://64.media.tumblr.com/8f17f8449b2fa1af1e6efffc1abd1f57/tumblr_pivyn0Jymq1rpwm80o1_250.jpg",
        name: "Nice Human",
        status: "Don't talk too much please..",
        friends: 423,
        posts: 254,
        likes: 2331,
        comments: 263,
        specialMember: false
    },
    {
        userId: 8,
        profilePicture: "https://64.media.tumblr.com/a29fec5049d723f54532976a609ab308/tumblr_p7jxopvjBO1rpwm80o1_250.jpg",
        name: "Ichigo Takayaki",
        status: "Let's go play some basketball!",
        friends: 423,
        posts: 254,
        likes: 2331,
        comments: 263,
        specialMember: false
    },
    {
        userId: 9,
        profilePicture: "https://i.imgur.com/LWkJOzx.png",
        name: "dude",
        status: "sup..",
        friends: 224,
        posts: 321,
        likes: 4115,
        comments: 20,
        specialMember: true
    }

];
db.sequelize.sync({ force: true })
    .then(() => {
        db.UsersDetails.bulkCreate(dataToSeed, { validate: true })
            .then(() => { console.log("Successfully added the values"); exit() })
    })
    .catch(err => console.log(err));