const { ContactDB } = require('./../models');

module.exports.getContact = (req, res) => {
  const contacts = ContactDB.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const createdContact = ContactDB.createContact(req.body);
  res.status(201).send(createdContact);
};
