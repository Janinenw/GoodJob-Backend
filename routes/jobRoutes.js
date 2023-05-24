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
  console.log('ID:', req.params.id); 
  jobCtrls.getJobById(req, res); 
});

router.delete('/jobs/delete', (req, res) => {
    console.log('Hit the /jobs/delete route');
    jobCtrls.deleteJob(req, res);
  });

module.exports = router;