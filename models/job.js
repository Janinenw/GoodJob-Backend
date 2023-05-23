const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    appStatus: { type: String, required: true },
    importantDate: { type: String, required: true },
    notes: { type: String, default: true },
    finalResult: { type: String, default: true }
});

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;