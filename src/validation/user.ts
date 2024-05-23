import Joi from "joi";

const userValidation = {
  register: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
    .required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")).required(),
    role: Joi.string().valid('admin','user'),
  }),
  login: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
      .required(),
    password: Joi.string().required(),
  }),
};

export default userValidation;
