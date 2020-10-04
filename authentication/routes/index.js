const router = require("express").Router();

router.use((req, res) => {
    res.send(".");
});

module.exports = router;
