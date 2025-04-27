const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().required(),
  status: Joi.string().valid('pending', 'completed').required()
});

const taskUpdateSchema = Joi.object({
  title: Joi.string(),
  status: Joi.string().valid('pending', 'completed')
});

module.exports = {
  taskSchema,
  taskUpdateSchema
};