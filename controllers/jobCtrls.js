const Job = require('../models/job');

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getJobById = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  const createJob = async (req, res) => {
    try {
      
      const { company, position, appStatus, nextSteps, deadline, dateApplied, importantDate, notes, finalResult } = req.body;
  
     
      const job = await Job.create({
        company,
        position,
        appStatus,
        nextSteps,
        deadline,
        dateApplied,
        importantDate,
        notes,
        finalResult
      });
  
      res.json(job);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };


module.exports = { getJobs, getJobById, createJob};