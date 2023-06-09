const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: false },
  appStatus: { type: String, enum:['Sent','Waiting', 'Next Round'], required: false },
  nextSteps: { type: String, required: false },
  deadline: { type: String, required: false },
  dateApplied: { type: Date, required: false },
  importantDate: { type: String, required: false },
  notes: { type: String, required: false },
  finalResult: { type: String, enum:['Accepted', 'Rejected'], required: false },
  user_id: { type: String, required: true } 
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;