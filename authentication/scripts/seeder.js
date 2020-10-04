const db = require("../models");
const { exit } = require("process");

const dataToSeed = [{}, {}, {}];
db.sequelize
    .sync({ force: true })
    .then(() => {
        db.UsersDetails.bulkCreate(dataToSeed, { validate: true }).then(() => {
            console.log("Successfully added the values");
            exit();
        });
    })
    .catch(err => console.log(err));
