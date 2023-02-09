require("dotenv").config();
require("./config/db/database");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

const adminUser = {
  id: "43",
  admin: true,
  name: "zyrass",
  email: "zyrass@outlook.fr"
}

function generateAccessToken(a_user) {
  return jwt.sign(a_user, process.env.ACCESS_JWT, { expiresIn: "1800s"});
}

const accessToken = generateAccessToken(adminUser);
console.log({
  accessToken
})

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_JWT, (err, a_user) => {
    if (err) {
      return res.sendStatus(401);
    }
    res.user = a_user;
    next();
  })
}

const routesUserAPI = require("./router/userAPI.routes");
const routesEmployeeAPI = require("./router/employeeAPI.routes");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", authenticateToken, routesUserAPI);
app.use("/api", routesEmployeeAPI);

app.listen(PORT, () => {
  console.log(`Connecté à cette adresse: http://${HOSTNAME}:${PORT}`);
});
