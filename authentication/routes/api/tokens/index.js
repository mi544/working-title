const router = require("express").Router();

router.use("/deactivate", require("./deactivate"));
router.use("/verify", require("./verify"));
router.use("/getall", require("./getall"));

module.exports = router;
