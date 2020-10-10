const router = require("express").Router();
const controller = require("../../../../controllers");

router.route("/").put(async (req, res) => {
    try {
        if (!req.body.userId) {
            return res.send({ success: false, reason: "No userId provided." });
        }
        if (!req.body.activeToken) {
            return res.send({ success: false, reason: "No token provided." });
        }

        const deactivationResult = await controller.tokenController.deactivateAllTokensOfUserBesidesActive(
            req.body.activeToken,
            req.body.userId
        );

        if (!deactivationResult.success) {
            return res.send({ success: false, reason: deactivationResult.reason });
        }

        return res.send({ success: true, token: deactivationResult.token });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
