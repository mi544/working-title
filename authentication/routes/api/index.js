const router = require("express").Router();

router.use("/account", require("./account"));
router.use("/tokens", require("./tokens"));

module.exports = router;
