const db = require("../models");
const { exit } = require("process");

const dataToSeed = [
    {
        userId: "27b891d7-0cd8-43a2-b4da-8f0b0f833223",
        email: "example@email.com",
        password: "12gmj3kd@tghfds"
    },
    {
        userId: "bc204d45-96f7-48b4-8c16-f04a341ef627",
        email: "now@email.com",
        password: "dg5943E3%23h"
    },
    {
        userId: "6f1397e6-06e9-4d6b-9fef-f4928826eb82",
        email: "later@email.com",
        password: "dgh43io)@tyrgdS"
    }
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
