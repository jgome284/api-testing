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
  res.send(expressions)
});

expressionsRouter.param('id', (req, res, next, id) => {
  let expressionId = Number(id);
  try {
    const expressionIndex = getIndexById(expressionId, expressions);
      if (expressionIndex > -1) {
          req.index = expressionIndex
          req.id = expressionId
          next()
      } else {
          res.status(404).send(`Emoji Id #${id} was not found 😞`);
      }
  } catch (error) {
    next(err)    
  }
})

expressionsRouter.get("/:id", (req, res) => {
    res.send(expressions[req.index]);
  });

expressionsRouter.put("/:id", (req, res, next) => {
    updateElement(req.id, req.query, expressions);
    res.send(expressions[req.index])
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
    expressions.splice(req.index, 1);
    res.status(204).send(expressions[req.index]);
});

module.exports = expressionsRouter;