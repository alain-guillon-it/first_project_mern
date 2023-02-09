const UserModel = require("../Models/UserModel");

const postLogin = (req, res) => {
  res.end();
};
const postLogout = (req, res) => {
  res.end();
};
const postSignIn = (req, res) => {
  UserModel.findOne({ email: req.body.email }).then(result => {})
};

module.exports = {
  postLogin,
  postLogout,
  postSignIn,
};
