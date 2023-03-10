const mongoose = require("mongoose");

const COLLECTION_NAME_EMPLOYEES = process.env.MONGODB_COLLECTION_NAME_EMPLOYEES;

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model(COLLECTION_NAME_EMPLOYEES, EmployeeSchema);
