const router = require("express").Router();

router.use("/deactivate", require("./deactivate"));
router.use("/verify", require("./verify"));

module.exports = router;
