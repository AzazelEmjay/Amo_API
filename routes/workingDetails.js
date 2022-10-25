const express = require('express')
const router = express.Router()
const WorkingDetails = require('../models/workingDetails')


//Getting all
router.get('/', async (req, res) => {
    try{
        const workingDetails = await WorkingDetails.find()
       res.json (workingDetails)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getWorkingDetails, (req, res) => {
    res.json(res.workingDetails)  
})

router.post('/', (req, res) => {
   const workingDetails = new WorkingDetails({
    salaryPaymentID: req.body.salaryPaymentID,
    accumulatedPay: req.body.accumulatedPay,
    daysWorked: req.body.daysWorked,
    disclosedPaymentsAmount : req.body.disclosedPaymentsAmount,
    withdrawableAmount: req.body.withdrawableAmount
    
   })
   try {
       const newWorkingDetails =  workingDetails.save()
       res.status(201).json(newWorkingDetails)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})

async function getWorkingDetails(req, res, next){
    let workingDetails
    try {
        workingDetails = await WorkingDetails.findById(req.params.id)
        if (workingDetails == null){
            return res.status(404).json({message: ' Amount not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.workingDetails = workingDetails
    next()
} 
module.exports = router

