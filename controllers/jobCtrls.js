
const Job = require('../models/job');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({user_id: req.user._id});
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
    console.log('Request body:', req.body);
    console.log('Authenticated user:', req.user);

    const { company, position, appStatus, nextSteps, deadline, dateApplied, importantDate, notes, finalResult } = req.body;

    const job = await Job.create({
      user_id: req.user._id,
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
    console.log('Request body at time of error:', req.body);
    res.status(500).json({ error: 'Server error' });
  }
};


const updateJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const { company, position, appStatus, nextSteps, deadline, dateApplied, importantDate, notes, finalResult } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        company,
        position,
        appStatus,
        nextSteps,
        deadline,
        dateApplied,
        importantDate,
        notes,
        finalResult
      },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    console.log(`Updated Job: ${updatedJob}`);
    res.json(updatedJob);
  } catch (error) {
    console.log('Update Job Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    console.log(`Deleted Job: ${deletedJob}`);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.log('Delete Job Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
  
module.exports = { createJob, getJobs, getJobById, deleteJob, updateJob }