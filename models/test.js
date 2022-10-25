const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const testSchema = new mongoose.Schema({
  companyId: {
    type: ObjectId,
    required: true,
    ref: "Company",
  },
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bankAccNo: {
    type: Number,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  employmentStart: {
    type: Date,
    required: true
  }
});

const Test = mongoose.model('Test', testSchema)

module.exports = Test;

