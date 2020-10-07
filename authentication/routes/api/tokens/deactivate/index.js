const router = require("express").Router();

router.use("/one", require("./one"));
router.use("/allother", require("./allother"));

module.exports = router;
