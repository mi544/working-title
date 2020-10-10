const router = require("express").Router();
const controller = require("../../../../controllers");

router.route("/").get(async (req, res) => {
    try {
        if (!req.body.token) {
            return res.send({ success: false, reason: "No token provided." });
        }
        const verificationResult = await controller.tokenController.getUserIdAssociatedWithToken(
            req.body.token
        );
        if (!verificationResult.success) {
            return res.send({ success: false, reason: verificationResult.reason });
        }

        return res.send({ success: true, userId: verificationResult.userId });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
