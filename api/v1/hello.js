/* hello endpoint for static html */

const express = require('express');
const helloRouter = express.Router()
  
helloRouter.get('/', (req, res) => {
  res.send('<h1>Hello from Express! 🚀</h1>');
});
  
module.exports = helloRouter;
