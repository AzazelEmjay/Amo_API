
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open',(error)=> console.log('Connected to Database'))

app.use(express.json())
app.use(cors());

const RegisterRouter = require('./routes/register')
app.use('/register', RegisterRouter)

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const CompanyRouter = require('./routes/company')
app.use('/company',CompanyRouter)

const TestRouter = require("./routes/test")
app.use('/employee',TestRouter )

const workingDetailsRouter = require("./routes/workingDetails")
app.use('/workingdetails',workingDetailsRouter)

const SalaryPaymentRouter = require("./routes/salaryPayment")
app.use('/salarypayment',SalaryPaymentRouter)

const EarlyWithdrawalsRouter = require("./routes/earlyWithdrawals")
app.use('/earlywithdrawals', EarlyWithdrawalsRouter)

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Amo Payroll API",
      description: "",
      contact: {
        name: "Africa Code Academy",
      }
    },
  },
  //
  apis: ["./docs/endpointsdocs.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

console.log(swaggerDocs);

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */


app.listen(3000, () => console.log('Server Started'))