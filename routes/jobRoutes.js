const router = require('express').Router();
const jobCtrls = require('../controllers/jobCtrls.js');

router.post('/jobs/create', (req, res) => {
    console.log('Hit the POST /jobs/create route');
    jobCtrls.createJob(req, res); 
  });

router.get('/jobs', (req, res) => {
  console.log('Hit the /jobs route');
  jobCtrls.getJobs(req, res); 
});


router.get('/jobs/:id', (req, res) => {
  console.log('Hit the /jobs/:id route');
  jobCtrls.getJobById(req, res); 
});




module.exports = router;