const db = require("../models");
const { exit } = require("process");

const dataToSeed = [
    { id: 1, token: "25t4td9w25tgrdsfgsdh3Sg", active: true },
    { id: 2, token: "sf2rwerghjyt5ersdfghedf", active: false },
    { id: 3, token: "432wedfgjyy5t4ewfsdfhtf", active: true }
];

db.sequelize
    .sync({ force: false })
    .then(async () => {
        for (const item of dataToSeed) {
            const UserInstance = await db.User.findByPk(item.id);
            const TokenInstance = await db.Token.create({
                token: item.token,
                active: item.active
            });
            await UserInstance.addToken(TokenInstance);
        }
        console.log("Successfully added and associated the tokens!");
        exit();
    })
    .catch(err => console.log(err));
