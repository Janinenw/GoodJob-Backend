

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  appStatus: { type: String, enum:['Sent','Waiting', 'Next Round'], required: true },
  nextSteps: { type: String },
  deadline: { type: String },
  dateApplied: { type: Date, required: true },
  importantDate: { type: String },
  notes: { type: String },
  finalResult: { type: String, enum:['Accepted', 'Rejected'] },
  user_id: { type: String, required:true}
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;

