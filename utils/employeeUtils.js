const { ObjectId } = require('mongodb');
const Employee = require("../models/employee");


exports.getEmployeeById = async (employeeId) =>{
    let employee = await Employee.findOne({
      _id:new ObjectId(employeeId),
    }).exec()

    if(employee !== null)
      return Promise.resolve(employee)
    else
      return Promise.reject()
}

exports.doesUserExist = async (email) => {
    const employee = await Employee.findOne({
        where: {email},
    });
    return Promise.resolve(employee != null);
};