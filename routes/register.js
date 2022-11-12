const express = require('express')
const router = express.Router()
const User = require('../models/logins')


//Getting all
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
       res.json (users)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})
//Getting One
router.get('/:id', getUser, (req, res) => {
     res.json(res.user)  
})
//Creating One
router.post('/', (req, res) => {
   const user = new User({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      PhoneNumber: req.body.PhoneNumber,
      Password: req.body.Password,
      Roles: req.body.Password
   })
   try {
       const newUser =  user.save()
       res.status(201).json(newUser)
   }
   catch(err){
        res.status(400).json({message: err.message})
   }

})

async function getUser(req, res, next){
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: 'User not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.user = user
    next()
} 
module.exports = router

