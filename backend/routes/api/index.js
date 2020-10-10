const router = require("express").Router();

router.use("/profile", require("./profile"));
router.use("/friends", require("./friends"));
router.use("/users", require("./users"));

module.exports = router;
