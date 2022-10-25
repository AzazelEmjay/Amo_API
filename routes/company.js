const express = require('express')
const router = express.Router()
const Company = require('../models/company.js')


//Getting all
router.get('/', async (req, res) => {
    try{
        const company = await Company.find()
       res.json (company)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getCompany, (req, res) => {
    res.json(res.company)  
})

router.post('/', (req, res) => {
   const company = new Company({
      CompanyName: req.body.CompanyName,
      CompanyIndustry: req.body.CompanyIndustry,
      CompanyLocation: req.body.CompanyLocation,
      PayrollDate: req.body.PayrollDate,
      BaseCountry: req.body.BaseCountry,
      PhoneNumber: req.body.PhoneNumber
   })
   try {
       const newCompany =  company.save()
       res.status(201).json(newCompany)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})


async function getCompany(req, res, next){
    let company
    try {
        company = await Company.findById(req.params.id)
        if (company == null){
            return res.status(404).json({message: 'Company not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.company = company
    next()
} 
module.exports = router

