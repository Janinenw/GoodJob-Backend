const router = require('express').Router();
const jobCtrls = require = require('../controllers/jobCtrls.js');

router.get('/jobs', (req, res) => {
  console.log('Hit the /jobs route');
  jobCtrls.getJobs(req, res); 
});

router.get('/jobs/:id', (req, res) => {
    console.log('Hit the /jobs/:id route');
    jobCtrls.getJobById(req, res); 
  });

module.exports = router;