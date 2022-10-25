const express = require("express");
const router = express.Router();
const Test = require("../models/test");

router.get("/", async (req, res) => {
  try {
    const test = await Test.find();
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", (req, res) => {
  const test = new Test({
    companyId: req.body.companyId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    email: req.body.email,
    bankAccNo: req.body.bankAccNo,
    bankName: req.body.bankName,
    employmentStart: req.body.employmentStart,
  });
  try {
    const newTest = test.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
