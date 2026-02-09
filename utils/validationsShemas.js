const yup = require('yup');

const NAME_VALIDATIONS_SHEMAS = yup.string().trim().min(2).max(64);
const TEL_VALIDATIONS_SHEMAS = yup
  .string()
  .trim()
  .matches(/^\+380\d{9}$/, 'Tel number must corresponds pattern +380111111111');

module.exports.CREATE_CONTACT_VALIDATIONS_SHEMA = yup.object({
  name: NAME_VALIDATIONS_SHEMAS.required(),
  telNumber: TEL_VALIDATIONS_SHEMAS.required(),
  birthday: yup.date().max(new Date()),
});

module.exports.UPDATE_CONTACT_VALIDATIONS_SHEMA = yup.object({
  name: NAME_VALIDATIONS_SHEMAS,
  telNumber: TEL_VALIDATIONS_SHEMAS,
  birthday: yup.date().max(new Date()),
  isFavourite: yup.boolean(),
});
