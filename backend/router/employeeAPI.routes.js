const router = require("express").Router();
const myController = require("../app/Controllers/EmployeeApiController");

router.get("/employees", myController.getEmployees);
router.get("/employees/count", myController.getCountEmployees);
router.get("/employee/:id", myController.getEmployeeById);
router.post("/employees", myController.postAddEmployee);
router.delete("/employee/:id", myController.deleteEmployeeById);

module.exports = router;
