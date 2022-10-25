const mongoose = require("mongoose");

const  companySchema = new mongoose.Schema({
  CompanyName: {
    type: String,
    required: true,
    unique: true
  },
  CompanyIndustry: {
    type: String,
    required: true
  },
  CompanyLocation: {
    type: String,
    required: true
  },
  PayrollDate: {
    type: Date,
    required: true
  },
  BaseCountry: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: Number,
    required: true
  },
});

const Company = mongoose.model('Company', companySchema)

module.exports = Company;

