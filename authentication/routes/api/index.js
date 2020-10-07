const router = require("express").Router();

router.use("/signup", require("./signup"));
router.use("/singin", require("./singin"));
router.use("/tokens", require("./tokens"));

module.exports = router;
