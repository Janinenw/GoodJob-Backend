// require('dotenv').config();
// const mongoose = require('mongoose');
// const Job = require('./models/job');

// const MONGODB_URL = process.env.MONGODB_URL;

// mongoose.set('debug', true);


// mongoose.connect(MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// mongoose.connection
//   .on('open', () => console.log('You are connected to MongoDB- seed.js'))
//   .on('close', () => console.log("You are disconnected from MongoDB-seed.js"))
//   .on('error', (error) => console.error("MongoDB connection error:-seed.js", error));


// const jobsData = [
//     {
//       company: 'FAANG Custom Dental Implants',
//       position: 'Receptionist',
//       appStatus: 'Next Round',
//       nextSteps: 'Interview scheduled',
//       deadline: '2023-10-31',
//       dateApplied: new Date(),
//       importantDate: '2023-06-15 interview',
//       notes: 'Dentist is Vampire. All interviews must be scheduled at night',
//       finalResult: 'Accepted',
//     },
//     {
//       company: 'Bootstrap Farms',
//       position: 'Potato Manager',
//       appStatus: 'Sent',
//       nextSteps: '',
//       deadline: '2023-06-13',
//       dateApplied: new Date(),
//       importantDate: '',
//       notes: 'Call Gore',
//       finalResult: 'Rejected',
//     },
    
//   ];

// const seedJob = async () => {
//   try {
   
//     await Job.insertMany(jobsData);

//     console.log('Test jobs seeded successfully.');
//   } catch (error) {
//     console.error('Error seeding jobs:', error);
//   } finally {
    
//     mongoose.disconnect();
//   }
// };


// seedJob();


