const express = require('express');
const bodyParser = require('body-parser');
const parse = require('csv-parse');
const router = express.Router();
const logger  = require('morgan');
const mongoose = require('mongoose');
const path    = require('path');
const app = express();

//connecting to db
mongoose.connect('mongodb://localhost/mongocsv')
    .then(db => console.log('DB Connect'))
    .catch(err => console.log(err))

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = app;