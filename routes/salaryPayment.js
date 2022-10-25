const express = require('express')
const router = express.Router()
const SalaryPayment = require('../models/salaryPayment')


//Getting all
router.get('/', async (req, res) => {
    try{
        const salaryPayment = await SalaryPayment.find()
       res.json (salaryPayment)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getSalaryPayment, (req, res) => {
    res.json(res.salaryPayment)  
})

router.post('/', (req, res) => {
   const salaryPayment = new SalaryPayment({
    employeeId: req.body.employeeId,
    grossSalary: req.body.grossSalary,
    netSalary: req.body.netSalary,
    salaryPeriod: req.body.salaryPeriod
    
   })
   try {
       const newSalaryPayment =  salaryPayment.save()
       res.status(201).json(newSalaryPayment)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})


async function getSalaryPayment(req, res, next){
    let salaryPayment
    try {
        salaryPayment = await SalaryPayment.findById(req.params.id)
        if (salaryPayment == null){
            return res.status(404).json({message: 'Salary Payment not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.salaryPayment = salaryPayment
    next()
} 
module.exports = router

