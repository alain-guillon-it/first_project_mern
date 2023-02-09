const UserModel = require("../Models/UserModel");

const postLogin = (req, res) => {

  UserModel.findOne({
    email: req.body.email
  }).limit(1).exec().then(
    response => {
      console.log(response)
      res.end()
    }
  )
  
};
const postLogout = (req, res) => {
  res.end();
};
const postSignIn = (req, res) => {
  UserModel.findOne({ email: req.body.email }).then(result => {
    if (!result) {
      const newUser = new UserModel(req.body);
      console.log(newUser)
      res.end()
    }
  })
};

module.exports = {
  postLogin,
  postLogout,
  postSignIn,
};
