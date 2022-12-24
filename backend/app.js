const express = require('express');
const helmet = require("helmet");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config()

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/auth');

const getId = process.env.DB_USER;
const getPS = process.env.DB_PASS; 
const getUrl = process.env.DB_HOST; 

mongoose.connect(`mongodb+srv://${getId}:${getPS}@${getUrl}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(bodyParser.json())
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site')
  next();
});

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;