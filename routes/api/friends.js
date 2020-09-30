const router = require("express").Router();
const controller = require("../../controllers");

router.route("/").get(controller.usersController.findAllUsersWithDetails);

module.exports = router;
