const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/create", require("./create"));

module.exports = router;
