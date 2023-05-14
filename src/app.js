const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log('Pasando por el middleware');
    next();
});

app.use(mainRouter);

module.exports = app;