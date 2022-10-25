const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const  workingHoursLogSchema = new mongoose.Schema({
    employeeId: {
       type: ObjectId,
       required: true,
       ref: "Employee"
     },
     startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date
      },
    });

    const WorkingHoursLog = mongoose.model('WorkingHoursLog', workingHoursLogSchema)
    module.exports = WorkingHoursLog;