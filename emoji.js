/* 
Sample server that responds with emoji data.
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const expressions = [
    {'id': 1, 'emoji': '😀', 'name': 'happy'},
    {'id': 2, 'emoji': '😎', 'name': 'shades'},
    {'id': 3, 'emoji': '😴', 'name': 'sleepy'}
];

const getElementById = (id, elementList) => {
    return elementList.find((element) => {
      return element.id === Number(id);
    });
  };

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
        res.status(404).send(`Emoji Id #${req.params.id} was not found 😞`);
    }
  });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});