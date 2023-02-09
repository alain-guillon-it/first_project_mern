require("dotenv").config();
require("./config/db/database");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

const routesUserAPI = require("./router/userAPI.routes");
const routesEmployeeAPI = require("./router/employeeAPI.routes");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routesUserAPI);
app.use("/api", routesEmployeeAPI);

app.listen(PORT, () => {
  console.log(`Connecté à cette adresse: http://${HOSTNAME}:${PORT}`);
});
