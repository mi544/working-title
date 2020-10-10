const router = require("express").Router();

router.use("/api", require("./api"));

router.use((req, res) => {
    res.send(".");
})

module.exports = router;