const db = require("../models");
const { exit } = require("process");
const controller = require("../controllers");

const dataToSeed = [
    {
        email: "example@email.com",
        password: "12gmj3kd@tghfds"
    },
    {
        email: "now@email.com",
        password: "dg5943E3%23h"
    },
    {
        email: "later@email.com",
        password: "dgh43io)@tyrgdS"
    }
];

db.sequelize.sync({ force: false }).then(async () => {
    try {
        for (const item of dataToSeed) {
            const userLookupResult = await controller.userController.validateUserCredentials(
                item.email,
                item.password
            );
            console.log("SUPPPERR", userLookupResult.userId);
            await controller.tokenController.createAndAssignTokenToUser(
                userLookupResult.userId
            );
        }
        exit();
    } catch (error) {
        console.log(error);
        exit();
    }
});
