const mongoose = require("mongoose");

const COLLECTION_NAME_USERS = process.env.MONGODB_COLLECTION_NAME_USERS;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false
    },
    password: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "update_at",
    },
  }
);

module.exports = mongoose.model(COLLECTION_NAME_USERS, UserSchema);
