require('dotenv').config();
const mongoose = require('mongoose');
const Job = require('./models/job');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set('debug', true);


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection
  .on('open', () => console.log('You are connected to MongoDB- seed.js'))
  .on('close', () => console.log("You are disconnected from MongoDB-seed.js"))
  .on('error', (error) => console.error("MongoDB connection error:-seed.js", error));


  const jobsData = [
    {
      company: 'FAANG Custom Dental Implants',
      position: 'Receptionist',
      appStatus: 'Working On',
      nextSteps: 'Interview scheduled',
      deadline: '2023-06-23',
      dateApplied: '2023-06-11',
      importantDate: '2023-06-13',
      notes: 'Dentist is Vampire. All interviews must be scheduled at night',
      finalResult: 'Accepted',
      user_id: 'the_user_id_here' 
    },
    {
      company: 'Bootstrap Farms',
      position: 'Potato Manager',
      appStatus: 'Sent',
      nextSteps: '',
      deadline: '2023-06-22',
      dateApplied: '',
      importantDate: '',
      notes: 'Call Gore',
      finalResult:'Did not hear back, company can go suck an egg',
      user_id: 'the_user_id_here' 
    },
  ];

const seedJob = async () => {
  try {
   
    await Job.insertMany(jobsData);

    console.log('Test jobs seeded successfully.');
  } catch (error) {
    console.error('Error seeding jobs:', error);
  } finally {
    
    mongoose.disconnect();
  }
};


seedJob();


