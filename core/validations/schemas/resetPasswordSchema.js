import Joi from 'joi';

const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required(),
  password_confirmation: Joi.string().min(8).required(),
});

export default resetPasswordSchema;
