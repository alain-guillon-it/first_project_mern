const router = require("express").Router();
const myController = require("../app/Controllers/UsersApiController");

router.get("/users", myController.getUsers);
router.get("/users/:id", myController.getUserById);
router.post("/users", myController.postAddUser);
router.delete("/users/:id", myController.deleteUserById);

module.exports = router;
