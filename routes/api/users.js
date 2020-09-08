const router = require("express").Router();
// controller import here

// temporarily using an object instead of a db
const users = [{ id: 1, user: "user1" }, { id: 2, user: "user2" }];

router.route("/")
    .get((req, res) => res.json(users))

router.route("/:id")
    .get((req, res) => res.json(users.filter(item => item.id === parseInt(req.params.id))))

module.exports = router;