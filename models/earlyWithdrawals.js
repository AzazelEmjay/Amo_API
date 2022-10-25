const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const earlyWithdrawalsSchema = new mongoose.Schema({
    workingDetailsID: {
        type: ObjectId,
        ref: "WorkingDetails",
        unique: true
    },
    amountToWithdraw: {
        type: Number,
        required: true
    },
    requestStatus: {
        type: String,
        required: true,
        default: "Pending"
    }
});

const EarlyWithdrawals = mongoose.model('EarlyWithdrawals', earlyWithdrawalsSchema)
module.exports = EarlyWithdrawals;