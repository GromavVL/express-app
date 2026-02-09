const yup = require('yup');

const CREATE_CONTACT_VALIDATIONS_SHEMA = yup.object({
  name: yup.string().trim().min(2).max(64).required(),
  telNumber: yup
    .string()
    .trim()
    .matches(
      /^\+380\d{9}$/,
      'Tel number must corresponds pattern +380111111111'
    )
    .required(),
  birthday: yup.date().max(new Date()),
});

module.exports.validateContactOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validateContact = await CREATE_CONTACT_VALIDATIONS_SHEMA.validate(
      body
    );
    req.body = validateContact;
    next();
  } catch (e) {
    res.status(422).send('Validation Error');
  }
};

module.exports.validateContactOnUpdate = (req, res, next) => {
  next();
};
