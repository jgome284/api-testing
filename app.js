const express = require('express');
const app = express();

// Setup session cookie with custom signature
const cookieSession = require('cookie-session')
const Keygrip = require('keygrip')

app.use(cookieSession({
  name: 'session',
  keys: new Keygrip(['key1', 'key2'], 'SHA384', 'base64'),
  // Cookie Options
  maxAge: 60 * 1000 // Session expires after 1 minute of inactivity
}))

// Deploy site at root
app.use(express.static('public'));

// Logging Middleware
const morgan = require('morgan')
app.use(morgan('dev'));

// Import and mount the expressionsRouter
const expressionsRouter = require('./api/v1/expressions.js');
app.use('/expressions', expressionsRouter);
// Import and mount the helloRouter with cors enabled
const helloRouter = require('./api/v1/hello.js');
const cors = require('cors');
app.use('/hello', cors(), helloRouter);
// Import and mount the usersRouter
const usersRouter = require('./api/v1/users.js');
app.use('/users', usersRouter);

// Error handling middleware
const errorhandler = require('errorhandler')
app.use(errorhandler())

// Deploy application server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
