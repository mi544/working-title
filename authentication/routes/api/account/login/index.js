const router = require("express").Router();

router.route("/").get((req, res) => {
    // get an email, password
    // compare against the db
    // give token back if successful
    // give false with reason if unsuccessful
});

module.exports = router;
