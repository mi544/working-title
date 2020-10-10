const router = require("express").Router();
const controller = require("../../../../controllers");

router.route("/").post(async (req, res) => {
    try {
        if (!req.body.email) {
            return res.send({ success: false, reason: "No email provided." });
        }
        if (!req.body.password) {
            return res.send({ success: false, reason: "No password provided." });
        }
        const creationResult = await controller.userController.createUserWithCredentials(
            req.body.email,
            req.body.password
        );

        if (!creationResult.success) {
            return res.send({ success: false, reason: creationResult.reason });
        }

        const tokenResult = await controller.tokenController.createAndAssignTokenToUser(
            creationResult.userId
        );

        if (!tokenResult.success) {
            return res.send({ success: false, reason: creationResult.reason });
        }

        return res.send({ success: true, token: tokenResult.token });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
