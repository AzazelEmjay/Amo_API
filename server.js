require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open',(error)=> console.log('Connected to Database'))

app.use(express.json())

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const CompanyRouter = require('./routes/company')
app.use('/company',CompanyRouter)

const EmployeeRouter = require("./routes/employee")
app.use('/employee',EmployeeRouter)


const workingDetailsRouter = require("./routes/workingDetails")
app.use('/workingdetails',workingDetailsRouter)

const SalaryPaymentRouter = require("./routes/salaryPayment")
app.use('/salarypayment',SalaryPaymentRouter)

const EarlyWithdrawalsRouter = require("./routes/earlyWithdrawals")
app.use('/earlywithdrawals', EarlyWithdrawalsRouter)

app.listen(3000, () => console.log('Server Started'))