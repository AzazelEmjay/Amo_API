const express = require('express')
const router = express.Router()
const EarlyWithdrawals = require('../models/earlyWithdrawals')


//Getting all
router.get('/', async (req, res) => {
    try{
        const earlyWithdrawals = await EarlyWithdrawals.find()
       res.json (earlyWithdrawals)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

router.get('/:id', getEarlyWithdrawals, (req, res) => {
    res.json(res.earlyWithdrawals)  
})

router.post('/', (req, res) => {
   const earlyWithdrawals = new EarlyWithdrawals({
    workingDetailsID: req.body.workingDetailsID,
    amountToWithdraw: req.body.amountToWithdraw,
    requestStatus: req.body.requestStatus

    
   })
   try {
       const newEarlyWithdrawals =  earlyWithdrawals.save()
       res.status(201).json(newEarlyWithdrawals)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})

async function getEarlyWithdrawals(req, res, next){
    let earlyWithdrawals
    try {
        earlyWithdrawals = await EarlyWithdrawals.findById(req.params.id)
        if (earlyWithdrawals == null){
            return res.status(404).json({message: 'Early Withdrawals Requests not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.earlyWithdrawals = earlyWithdrawals
    next()
} 
module.exports = router

