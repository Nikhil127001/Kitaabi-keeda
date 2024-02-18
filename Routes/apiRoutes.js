const express = require('express');
const app  = express();
const adminRoutes = require('./adminRoutes');

app.use('/apiRoutes' , adminRoutes)

module.exports = app;