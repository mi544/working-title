const router = require("express").Router();
const controller = require("../../../../controllers");

router.route("/").get(async (req, res) => {
    try {
        if (!req.body.userId) {
            return res.send({ success: false, reason: "No userId provided." });
        }
        if (!req.body.activeToken) {
            return res.send({ success: false, reason: "No token provided." });
        }

        const allTokens = await controller.tokenController.getAllTokensAssociatedWithUserId(
            req.body.activeToken,
            req.body.userId
        );

        if (!allTokens.success) {
            return res.send({ success: false, reason: allTokens.reason });
        }

        return res.send({ success: true, token: allTokens.token });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
