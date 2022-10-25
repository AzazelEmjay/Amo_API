const { ObjectId } = require('mongodb');
const Test = require("../models/test");


exports.getEmployeeById = async (testId) =>{
    let employee = await Test.findOne({
      _id:new ObjectId(testId),
    }).exec()

    if(employee !== null)
      return Promise.resolve(employee)
    else
      return Promise.reject()
}

exports.doesUserExist = async (email) => {
    const employee = await Test.findOne({
        where: {email},
    });
    return Promise.resolve(employee != null);
};