const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const  salaryPaymentSchema = new mongoose.Schema({
    employeeId: {
       type: ObjectId,
       required: true,
       ref: "Employee"
     },
     grossSalary: {
        type: Number,
        required: true
      },
      netSalary: {
        type: Number,
        required: true
      },
      salaryPeriod: {
        type: String,
        required: true
      }
    });

    const SalaryPayment = mongoose.model('SalaryPayment', salaryPaymentSchema)
    module.exports = SalaryPayment;