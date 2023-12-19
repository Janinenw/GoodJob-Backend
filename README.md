### GoodJob!

Live Application:https://goodjobsoproud.herokuapp.com

Frontend Repository: https://github.com/Janinenw/GoodJob-Frontend


GoodJob! is a full CRUD MERN application that aims to make the job-hunting process slightly less painful. It helps users keep track of jobs to which they’ve applied, log important information such as deadlines, and keep track of the results of their efforts.  GoodJob! aims to boost morale with its fun colors, whimsical feel.  Additionally, it rewards the user with a joke every time they add a job to their tracker, and consoles them with a picture of a puppy every time they receive a rejection.



## Technologies Used

- MongoDB
- Express.js
- React.js ( with context and modal components)
- Node.js
- JWT
- bcrypt
- Third Party API: https://dog.ceo/dog-api/
- Heroku
- *Bootstrap
- *Tailwind

*I recognize that using both Bootstrap and Tailwind in the same application is not best practice. However, I wanted to learn to use both frameworks, and get a sense of which will best meet my needs going forward.

## Installation 

Necessary installations for running this application locally

Backend: Express, Mongoose, Nodemon, Dotenv, cors, method-override, json webtoken, bcrypt

Frontend: React, react modal, React Bootstrap, Tailwind

## Models

Job Schema:
  company: { type: String, required: true },
  position: { type: String, required: false },
  appStatus: { type: String, enum: ['Sent', 'Working On', 'Next Round'], required: false },
  nextSteps: { type: String, required: false },
  deadline: { type: String, required: false },
  dateApplied: { type: String, required: false },
  importantDate: { type: String, required: false },
  notes: { type: String, required: false },
  finalResult: {type: String,enum: ['Accepted', 'Rejected', 'N/A but it will be!',] ,default: 'N/A but it will be!'}, 
  user_id: { type: String, required: true }

User Schema:
  name: {type: String, required: [true, 'add name']},
  email: {type: String, required: [true, 'add email'], unique: true},
  password: {type: String, required: [true, 'add password']}


Routes:
   Jobs:
   router.post('/jobs/create', protect, jobCtrls.createJob);
   router.get('/jobs', protect, jobCtrls.getJobs);
   router.get('/jobs/:id', protect, jobCtrls.getJobById);
   router.put('/jobs/edit/:jobId', protect, jobCtrls.updateJob);
   router.delete('/jobs/delete/:jobId', protect, jobCtrls.deleteJob);

   Users:
   router.post('/', registerUser)
   router.post('/login', loginUser)



## User Stories

Users have the ability to:

- Easily understand the purpose of the application
- Register for an account
- Ability to log in 
- Create a list of jobs to which they've applied
- Edit or update the lists based on application results
- Recieve a  visual "reward" for their efforts

## MVP Goals

- MERN application with full CRUD
- Adherance to MVC structure
- User ability to log jobs to which they’ve applied and update status (e.g. accepted, rejected)
- "Reward" upon certain milestones ( submitting an entry to GoodJob!, rejection, etc)
- User authentication
- Deployment


## Next Steps:

- Enhanced styling
- Mobile Responsive Design
- More user "rewards"
- Ability for user to keep track of the number of jobs to which they've applied/ results
- Incorporation of Tableau Server REST API to help users track and visualize their progress


