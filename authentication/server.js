require("dotenv").config();

const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

const controller = require("./controllers/");
const tokenController = require("./controllers/tokenController");

db.sequelize
    .sync({ force: false })
    .then(() =>
        app.listen(PORT, async () => {
            console.log(`Listening on port ${PORT}`);

            const userResult = await controller.userController.createUserWithCredentials(
                "realusername",
                "realpassword"
            );
            const createdUserId = userResult.userId;
            console.log("Successfully create a user with id: ", createdUserId);

            const tokenResult1 = await controller.tokenController.createAndAssignTokenToUser(
                createdUserId
            );
            console.log(
                "Successfully created and attached a token: ",
                tokenResult1.token
            );

            const tokenResult2 = await controller.tokenController.createAndAssignTokenToUser(
                createdUserId
            );
            console.log(
                "Successfully created and attached a token: ",
                tokenResult2.token
            );

            const tokenResult3 = await controller.tokenController.createAndAssignTokenToUser(
                createdUserId
            );
            console.log(
                "Successfully created and attached a token: ",
                tokenResult3.token
            );

            const tokenResult4 = await controller.tokenController.deactivateAllTokensOfUserBesidesActive(
                createdUserId,
                tokenResult1.token
            );
            console.log(
                "Successfully deactivated all the tokens besides this: ",
                tokenResult1.token
            );

            const tokenResult5 = await controller.tokenController.deactivateTokenOfUser(
                tokenResult1.token
            );
            console.log("Successfully deactivated this token: ", tokenResult1.token);

            const tokenResult6 = await controller.tokenController.createAndAssignTokenToUser(
                createdUserId
            );
            console.log(
                "Successfully created and attached a token: ",
                tokenResult6.token
            );
        })
    )
    .catch(err => console.log(err));
