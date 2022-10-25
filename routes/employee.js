const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


//Getting all
router.get('/', async (req, res) => {
    try{
        const employee = await Employee.find()
       res.json (employee)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getEmployee, (req, res) => {
    res.json(res.company)  
})

router.post('/', (req, res) => {
   const employee = new Employee({
      companyID: req.body.companyID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      email: req.body.email,
      bankAccNo: req.body.bankAccNo,
      bankName: req.body.bankName,
      employmentStart: req.body.employmentStart
      
   })
   try {
       const newEmployee =  employee.save()
       res.status(201).json(newEmployee)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})


async function getEmployee(req, res, next){
    let employee
    try {
        employee = await Employee.findById(req.params.id)
        if (employee == null){
            return res.status(404).json({message: 'Employee not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.employee = employee
    next()
} 
module.exports = router