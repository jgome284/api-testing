/* 
Sample server that responds with emoji data.
*/

const express = require('express');
const app = express();

const {
    getElementById,
    getIndexById,
    updateElement,
  } = require("./utils");

const PORT = process.env.PORT || 4001;

const expressions = [
    {'id': 1, 'emoji': '😀', 'name': 'happy'},
    {'id': 2, 'emoji': '😎', 'name': 'shades'},
    {'id': 3, 'emoji': '😴', 'name': 'sleepy'}
];

// Get all expressions
app.get('/expressions', (req, res, next) => {
  // console.log(req);
  res.send(expressions)
});

app.get("/expressions/:id", (req, res) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send(`There is no Emoji Id #${req.params.id} to get! 😞`);
    }
  });

app.put("/expressions/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex > -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex])
  }
  else {
    res.status(404).send(`There is no emoji Id #${req.params.id} to update! 🫢`)
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});