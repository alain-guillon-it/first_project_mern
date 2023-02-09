const UserModel = require("../Models/UserModel");

const postLogin = (req, res) => {

  UserModel.findOne({
    email: req.body.email
  }).limit(1).exec().then(
    response => {

      // vérifier avec bcrypt le mot de passe
      // générer le token

      console.log(response)
      res.end()
    }
  )
  
};
const postLogout = (req, res) => {
  res.end();
};
const postSignIn = (req, res) => {
  const newUser = new UserModel(req.body);
  console.log(newUser)
  newUser.save()
  res.redirect("http://localhost:3000/login")
};

module.exports = {
  postLogin,
  postLogout,
  postSignIn,
};
