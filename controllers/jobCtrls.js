const Job = require('../models/Job');
const mongoose = require('mongoose');

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log('Get Jobs:', jobs);
    res.json(jobs);
  } catch (error) {
    console.log('Get Jobs Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid job ID' });
    }

    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.log('Get Job By ID Error:', error);
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

    console.log('Create Job:', job);

    res.json(job);
  } catch (error) {
    console.log('Create Job Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createJob, getJobs, getJobById };