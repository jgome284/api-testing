/* 
Endpoint for emoji data.
*/

const express = require('express');
const expressionsRouter = express.Router();

const {
    getIndexById,
    updateElement,
    createElement,
  } = require("../utils");

const expressions = [
    {'id': 1, 'emoji': '😀', 'name': 'happy'},
    {'id': 2, 'emoji': '😎', 'name': 'shades'},
    {'id': 3, 'emoji': '😴', 'name': 'sleepy'}
];

// Get all expressions
expressionsRouter.get('/', (req, res, next) => {
  // console.log(req);
  res.send(expressions)
});

expressionsRouter.get("/:id", (req, res) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex > -1) {
        res.send(expressions[expressionIndex]);
    } else {
        res.status(404).send(`There is no Emoji Id #${req.params.id} to get! 😞`);
    }
  });

expressionsRouter.put("/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex > -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex])
  }
  else {
    res.status(404).send(`There is no emoji Id #${req.params.id} to update! 🫢`)
  }
});


expressionsRouter.post("/", (req, res, next) => {
    const newExpression = createElement(req.query);
    if (newExpression) {
      expressions.push(newExpression);
      res.status(201).send(newExpression);
    } else {
      res.status(400).send();
    }
  });

expressionsRouter.delete("/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send(expressions[expressionIndex]);
  } else {
    res.status(404).send(`There is no emoji Id #${req.params.id} to delete 😒`);
  }
});

module.exports = expressionsRouter;