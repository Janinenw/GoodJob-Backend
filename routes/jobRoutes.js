const router = require('express').Router();
const jobCtrls = require('../controllers/jobCtrls.js');

const {protect} = require('../middleware/authMiddleware')
router.post('/jobs/create',protect, (req, res) => {
  console.log('Hit the POST /jobs/create route');
  jobCtrls.createJob(req, res); 
});

router.get('/jobs', protect ,(req, res) => {
  console.log('Hit the /jobs route');
  jobCtrls.getJobs(req, res); 
});

router.get('/jobs/:id',protect, (req, res) => {
  console.log('Hit the /jobs/:id route');
  console.log('ID:', req.params.id); 
  jobCtrls.getJobById(req, res); 
});

router.put('/jobs/edit', protect, (req, res) => {
    console.log('Hit the /jobs/edit route');
    jobCtrls.updateJob(req, res);
  });

router.delete('/jobs/delete', protect, (req, res) => {
    console.log('Hit the /jobs/delete route');
    jobCtrls.deleteJob(req, res);
  });

module.exports = router;