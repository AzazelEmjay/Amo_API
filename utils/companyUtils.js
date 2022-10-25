const { ObjectId } = require('mongodb');
const Company = require("../models/company");


  exports.doesCompanyExist = async (CompanyName) => {
    const company = await Company.findOne({
        where: {CompanyName},
    });
    return Promise.resolve(company != null);
};

  exports.getCompanyById = async (companyId) =>{
    let company = await Company.findOne({
      _id:new ObjectId(companyId),
    }).exec()

    if(company !== null)
      return Promise.resolve(company)
    else
      return Promise.reject()
}

