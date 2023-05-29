require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();
const routes = require('./routes/jobRoutes.js');
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:4000/auth/google/callback" 
  },
  function(accessToken, refreshToken, profile, cb) {
   
    return cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/jobs');
  });

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