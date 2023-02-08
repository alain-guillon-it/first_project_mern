const UserModel = require("../Models/UserModel");

const getUsers = (req, res) => {
  // UserModel.find()
  //   .countDocuments()
  //   .exec()
  //   .then((result) => {
  //     if (result > 0) {
  UserModel.find()
    .then((documents) => res.status(200).json(documents))
    .catch((err) => console.log(err.stack));
  //   } else {
  //     res.status(400).json("aucun document trouvé");
  //   }
  // });
};

const getUserById = (req, res) => {
  UserModel.findById(req.params.id)
    .then((document) => res.status(200).json(document))
    .catch((err) => res.status(400).json("err"));
};

const postAddUser = (req, res) => {
  const newUserModel = new UserModel(req.body);
  newUserModel.save();
  res.end();
};

const deleteUserById = (req, res) => {
  UserModel.findOneAndDelete({ _id: req.params.id }).exec();
  res.end();
};

module.exports = {
  getUsers,
  getUserById,
  postAddUser,
  deleteUserById,
};
