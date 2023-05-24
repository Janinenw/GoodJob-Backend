const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  appStatus: { type: String, enum:['Sent','Waiting', 'Next Round'], required: true },
  nextSteps: { type: String },
  deadline: { type: String },
  dateApplied: { type: Date, required: true },
  importantDate: { type: String },
  notes: { type: String, default: true },
  finalResult: { type: String, enum:['Accepted', 'Rejected'] },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;