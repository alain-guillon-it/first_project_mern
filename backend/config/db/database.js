const mongoose = require("mongoose");

const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER_NAME = process.env.MONGODB_CLUSTER_NAME;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLUSTER_NAME}.d51otgm.mongodb.net/${DATABASE_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connecté à la base de donnée"))
  .catch((err) => console.log(err.stack));
