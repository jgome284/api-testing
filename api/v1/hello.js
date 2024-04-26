/* hello endpoint for static html */
const express = require('express');
const helloRouter = express.Router()

// Import the cookie-parser middleware
/* const cookieParser = require('cookie-parser');  
helloRouter.use(cookieParser()) */

helloRouter.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  res.send(`<h1>Hello from Express! 🚀</h1><br><p>Page view counter: ${req.session.views} 🔄️</p>`);
});
  
module.exports = helloRouter;
