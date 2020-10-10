const router = require("express").Router();
const controller = require("../../../../controllers");

router.route("/").get(async (req, res) => {
    try {
        if (!req.body.email) {
            return res.send({ success: false, reason: "No email provided." });
        }
        if (!req.body.password) {
            return res.send({ success: false, reason: "No password provided." });
        }

        const validationResult = await controller.userController.validateUserCredentials(
            req.body.email,
            req.body.password
        );

        if (!validationResult.success) {
            return res.send({ success: false, reason: validationResult.reason });
        }

        const tokenResult = await controller.tokenController.createAndAssignTokenToUser(
            validationResult.userId
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
