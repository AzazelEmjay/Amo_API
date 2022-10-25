const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const  employmentTermSchema = new mongoose.Schema({
    employeeId: {
       type: ObjectId,
       required: true,
       ref: "Employee"
     },
     agreedSalary: {
       type: Number,
       required: true
     },
     salaryStartDate: {
       type: Date,
       required: true
     },
     salaryEndDate: {
         type: Date
         
     },
     gender: {
       type: String,
       required: true
     },
     address: {
       type: String,
       required: true
     },
     email: {
       type: String,
       required: true
     },
     employmentStart: {
       type: Date,
       required: true
     },
   });
   
    const Employment = mongoose.model('Employment', employmentTermSchema)
    module.exports = Employment;