const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send({
    admin: "admin",
    users: ['user1', 'user2']
  });
});

app.listen(3000);

module.exports.app = app;
