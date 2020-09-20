const express = require('express')
const app = express()
const mongoose = require('mongoose')
const body = require('body-parser')

mongoose.connect('mongodb://localhost:27017/myNewDb',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
app.use(body.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;