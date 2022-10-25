const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const  workingDetailsSchema = new mongoose.Schema({
   
    salaryPaymentID: {
        type: ObjectId,
        required: true,
        ref: "SalaryPayment"
      },
    accumulatedPay:{
      type: Number,
      required: true 
    },
    daysWorked:{
      type: Number,
      required: true

    },
    payPerDay:{
      type: Number,
      required: true
    },
    disclosedPaymentsAmount:{
      type: Number,
      required: true
    },
    withdrawableAmount:{
      type: Number,
      required: true
    }
      
    });

    const workingDetails = mongoose.model('WorkingDetails', workingDetailsSchema)
    module.exports = workingDetails;