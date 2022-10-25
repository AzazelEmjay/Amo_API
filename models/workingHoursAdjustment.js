const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const  workingHoursAdjustmentSchema = new mongoose.Schema({
    workingHoursLogID: {
       type: ObjectId,
       required: true,
       ref: "WorkingHoursLog"
     },
     adjustmentID: {
        type: ObjectId,
        required: true,
        ref: "Adjustment"
      },
      salaryPaymentID: {
        type: ObjectId,
        required: true,
        ref: "SalaryPayment"
      },
      adjustmentAmount: {
        type: Number,
        required: true
      },
      adjustmentPercentage: {
        type: Number,
        required: true
      },
      
    });

    const WorkingHoursAdjustment = mongoose.model('WorkingHoursAdjustment', workingHoursAdjustmentSchema)
    module.exports = WorkingHoursAdjustment;