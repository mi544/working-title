const router = require("express").Router();
const controller = require("../../controllers");

router.route("/")
    .get(controller.usersController.findAllUsersWithDetails)

router.route("/:id")
    .get(controller.usersController.findAllDetailsOfAUserById)

module.exports = router;