// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const JobSchema = new Schema({
//   company: { type: String, required: true },
//   position: { type: String, required: false },
//   appStatus: { type: String, enum: ['Sent','Working On','Next Round'], required: false },
//   nextSteps: { type: String, required: false },
//   deadline: { type: String, required: false },
//   dateApplied: { type: Date, required: false },
//   importantDate: { type: String, required: false },
//   notes: { type: String, required: false },
//   finalResult: { type: String, enum: ['Accepted', 'Rejected','N/A but it will be!'], required: false },
//   user_id: { type: String, required: true }
// });

// const Job = mongoose.model('Job', JobSchema);

// module.exports = Job;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: false },
  appStatus: { type: String, enum: ['Sent', 'Working On', 'Next Round'], required: false },
  nextSteps: { type: String, required: false },
  deadline: { type: String, required: false },
  dateApplied: { type: Date, required: false },
  importantDate: { type: String, required: false },
  notes: { type: String, required: false },
  finalResult: {
    type: String,
    enum: ['Accepted', 'Rejected', 'N/A but it will be!', 'Did not hear back, company can go suck an egg'],
    default: 'N/A but it will be!'
  },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;