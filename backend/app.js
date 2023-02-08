require("dotenv").config();
require("./config/db/database");
const path = require("path");
const cors = require("cors");
const routesUserAPI = require("./router/userAPI.routes");
const morgan = require("morgan");
const express = require("express");
const app = express();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

// app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(["/", "/api"], (req, res) => {
  res.redirect("/api");
});
app.use("/api", routesUserAPI);

app.listen(PORT, () => {
  console.log(`Connecté à cette adresse: http://${HOSTNAME}:${PORT}`);
});
