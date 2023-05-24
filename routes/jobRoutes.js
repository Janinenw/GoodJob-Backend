const router = require('express').Router();
const jobCtrls = require = require('../controllers/jobCtrls.js');

router.get('/jobs', (req, res) => {
  console.log('Hit the /jobs route');
  jobCtrls.getJobs(req, res); 
});

module.exports = router;