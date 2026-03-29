const { v4: uuid } = require('uuid');

const dogs = [{ id: '1', name: 'dog1', age: 5 }];

module.exports.createDog = (req, res, next) => {
  const { body } = req;

  body.id = uuid();
  dogs.push(body);
  const n = dogs.length;
  res.status(201).send(dogs[n - 1]);
};

module.exports.updateDog = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const index = dogs.findIndex(d => d.id === id);

  if (index === -1) {
    return res.status(404).send('Error index');
  }
  dogs[index] = { ...dogs[index], ...body };
  console.log('dogs :>> ', dogs);

  res.status(200).send(dogs[index]);
};
