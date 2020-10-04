const db = require("../models");
const { exit } = require("process");

const dataToSeed = [
    { userId: "wf32khsdps3", email: "example@email.com", password: "12gmj3kd@tghfds" },
    { userId: "df23ths23", email: "now@email.com", password: "dg5943E3%23h" },
    { userId: "g320t50ew1", email: "later@email.com", password: "dgh43io)@tyrgdS" }
];
db.sequelize
    .sync({ force: true })
    .then(() => {
        db.User.bulkCreate(dataToSeed, { validate: true }).then(() => {
            console.log("Successfully added the users!");
            exit();
        });
    })
    .catch(err => console.log(err));
