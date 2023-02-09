const EmployeeModel = require("../Models/EmployeeModel");

const getEmployees = (req, res) => {
  EmployeeModel.find()
    .sort({ salary: 1 })
    .exec()
    .then((documents) => res.status(200).json(documents))
    .catch((err) => console.log(err.stack));
};

const getCountEmployees = (req, res) => {
  EmployeeModel.find()
    .countDocuments()
    .exec()
    .then((documentsNumber) => res.json(documentsNumber))
    .catch((err) => console.log(err.stack));
};

const getEmployeeById = (req, res) => {
  EmployeeModel.findById(req.params.id)
    .then((document) => res.status(200).json(document))
    .catch((err) => res.status(400).json("err"));
};

const postAddEmployee = (req, res) => {
  const newEmployeeModel = new EmployeeModel(req.body);
  newEmployeeModel.save();
  res.end();
};

const deleteEmployeeById = (req, res) => {
  EmployeeModel.findOneAndDelete({ _id: req.params.id }).exec();
  res.end();
};

module.exports = {
  getEmployees,
  getCountEmployees,
  getEmployeeById,
  postAddEmployee,
  deleteEmployeeById,
};
