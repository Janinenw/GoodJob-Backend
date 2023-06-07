// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const routes = require('./routes/jobRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');
// const PORT = process.env.PORT;
// const MONGODB_URI = process.env.MONGODB_URI;

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Middleware');
//   next();
// });

// app.use('/', routes);
// app.use('/user', userRoutes);
// // added for deployment
// app.get('/', ( req, res) => {
//   res.send("HOME PAGE")
// })

// app.use((req, res) => {
//   res.status(404).json({ message: 'NOT A PROPER ROUTE' });
// });

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', (err) => console.log(err.message + ' Is MongoDB running?-server.js'));
// db.on('connected', () => console.log('MongoDB connected-server.js'));
// db.on('disconnected', () => console.log('MongoDB disconnected-server.js'));

// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const routes = require('./routes/jobRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.options('*', (req, res) => {
  // Pre-flight request. Reply successfully:
  res.send();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

app.use('/', routes);
app.use('/user', userRoutes);

app.get('/', ( req, res) => {
  res.send("HOME PAGE")
});

app.use((req, res) => {
  res.status(404).json({ message: 'NOT A PROPER ROUTE' });
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' Is MongoDB running?-server.js'));
db.on('connected', () => console.log('MongoDB connected-server.js'));
db.on('disconnected', () => console.log('MongoDB disconnected-server.js'));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));