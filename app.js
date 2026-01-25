const { contactsController } = require('./controllers');
const express = require('express');

console.log('contactsController :>> ', contactsController);

// Створення екземпляру експресу
const app = express();

// Middleware to parse json to js-object
app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

// CRUD
// Навішування обробника на метод GET на маршрут '/contacts'
app.get('/contacts/', contactsController.getContact);

// Навішування обробника на метод POST на маршрут '/contacts'
app.post('/contacts', contactsController.createContact);

app.get('/contacts/:id', contactsController.getContactById);

app.patch('/contacts/:id', contactsController.updateContactById);

app.delete('/contacts/:id', contactsController.deleteContactById);

app.get('/contacts/:id', (req, res) => {
  const {
    params: { id },
    query: { result, page },
  } = req;

  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);
  res.status(200).send('OK');
});

app.get('/users/:id/order', (req, res) => {
  const {
    params: { id },
    query: { isDone },
  } = req;

  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);
  res.status(200).send('OK)))');
});

module.exports = app;
