const mongoose = require("mongoose");

const applicantModel = new mongoose.Schema({
    vacancy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vacancy"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    cv: String,
    applied_at: String
});

module.exports = new mongoose.model("applicant", applicantModel);