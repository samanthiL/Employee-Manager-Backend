const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  id: { type: String },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  gender: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
module.exports = EmployeeModel;
