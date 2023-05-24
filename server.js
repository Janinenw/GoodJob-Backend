require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes/jobRoutes.js');
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

app.use('/', routes);

app.use((req, res) => {
  res.status(404).json({ message: 'NOT A PROPER ROUTE' });
});

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' Is MongoDB running?-server.js'));
db.on('connected', () => console.log('MongoDB connected-server.js'));
db.on('disconnected', () => console.log('MongoDB disconnected-server.js'));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));