const router = require("express").Router();
const myController = require("../app/Controllers/UsersApiController");

router.get("/users/show", myController.getUsers);
router.get("/users/show/:id", myController.getUserById);
router.post("/users/add", myController.postAddUser);
router.delete("/users/delete/:id", myController.deleteUserById);
// router.get("/users/delete/:id", myController.deleteUserById);

module.exports = router;
