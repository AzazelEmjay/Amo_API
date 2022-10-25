const { ObjectId } = require('mongodb');
const WorkingDetails = require("../models/salaryPayment");


exports.getWorkingDetailsById = async (workingDetailsID) =>{
    let workingDetails= await WorkingDetails.findOne({
      _id:new ObjectId(workingDetailsID),
    }).exec()

    if(workingDetails !== null)
      return Promise.resolve(workingDetails)
    else
      return Promise.reject()
}