const {
  CREATE_CONTACT_VALIDATIONS_SHEMA,
  UPDATE_CONTACT_VALIDATIONS_SHEMA,
} = require('../utils/validationsShemas');

module.exports.validateContactOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validateContact = await CREATE_CONTACT_VALIDATIONS_SHEMA.validate(
      body
    );
    req.body = validateContact;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validateContactOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const updateContact = await UPDATE_CONTACT_VALIDATIONS_SHEMA.validate(body);
    req.body = updateContact;
    next();
  } catch (e) {
    next(e);
  }
};
