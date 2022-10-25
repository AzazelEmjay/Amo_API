const { ObjectId } = require('mongodb');
const SalaryPayment = require("../models/salaryPayment");




exports.getSalaryPaymentById = async (salaryPaymentID) =>{
    let salaryPayment= await SalaryPayment.findOne({
      _id:new ObjectId(salaryPaymentID),
    }).exec()

    if(salaryPayment !== null)
      return Promise.resolve(salaryPayment)
    else
      return Promise.reject()
}