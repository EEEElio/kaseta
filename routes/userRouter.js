const express = require("express");

const userControllers = require("../controllers/userControllers");

const router = express.Router();

router
  .route("/")
  .get(userControllers.getUser)
  .post(userControllers.createUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

router.route("/all").get(userControllers.getAllUsers);

router.route("/allAttributes").get(userControllers.getAllUsersAttributes);

module.exports = router;
