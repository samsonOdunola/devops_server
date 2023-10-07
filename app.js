const express = require('express');
require('dotenv').config();

const App = express();
const cors = require('cors');

const productRoute = require('./routes/route');

App.use(cors());
App.use(express.json({ limit: '50mb' }));

App.get('/', (req, res) => {
  res.status(200).send('working');
});
App.use('/api', productRoute);

module.exports = App;
