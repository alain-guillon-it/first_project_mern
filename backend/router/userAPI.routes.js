const router = require("express").Router();
const myController = require("../app/Controllers/UserApiController");

router.post("/login", myController.postLogin);
router.post("/signup", myController.postSignIn);
router.post("/logout", myController.postLogout);

module.exports = router;
