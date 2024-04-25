const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

// Logging Middleware
const morgan = require('morgan')
app.use(morgan('dev'));

// Import and mount the expressionsRouter
const expressionsRouter = require('./api/v1/expressions.js');
app.use('/expressions', expressionsRouter);
// Import and mount the helloRouter
const helloRouter = require('./api/v1/hello.js');
app.use('/hello', helloRouter);
// Import and mount the usersRouter
const usersRouter = require('./api/v1/users.js');
app.use('/users', usersRouter);

// Error handling middleware
const errorhandler = require('errorhandler')
app.use(errorhandler())

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
