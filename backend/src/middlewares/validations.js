const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  createOngs: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
  }),

  isAuthorization: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),

  isNumberPaginate: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),

  isNumberDel: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    })
  }),

  loginRequired: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    })
  }),

  createIncidents: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(10).max(100),
      description: Joi.string().required().min(10).max(100),
      value: Joi.number().required(),
    })
  }),
}

