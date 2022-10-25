const { ObjectId } = require('mongodb');
const Company = require("../models/company");


/**
* @param {String} companyText 
* @returns {Boolean}
*/

exports.doesCompanyExist = async (companyText ) =>{
    const category = await Company.findOne({
      text: {$regex:companyText , $options:"i"},
    }).exec();
  
    return Promise.resolve(category != null)
  }

  exports.getCompanyById = async (companyID) =>{
    let company = await Company.findOne({
      _id:new ObjectId(companyID),
    }).exec()

    if(company !== null)
      return Promise.resolve(company)
    else
      return Promise.reject()
}