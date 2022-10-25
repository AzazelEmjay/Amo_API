const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const employeeSchema = new mongoose.Schema({
  companyID: {
    type: ObjectId,
    ref: "Company"
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bankAccNo: {
    type: Number,
    required: true,
  },
  bankName: {
    type: String,
  },
  employmentStart: {
    type: Date,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
