const { taskSchema, taskUpdateSchema } = require('../validations/taskValidation');

const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateTaskUpdate = (req, res, next) => {
  const { error } = taskUpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = {
  validateTask,
  validateTaskUpdate
}
