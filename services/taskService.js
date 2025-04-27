const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const filePath = './tasks.json';

const readTasks = async () => {
  const exists = await fs.pathExists(filePath);
  if (!exists) await fs.writeJson(filePath, []);
  return fs.readJson(filePath);
};

const writeTasks = (tasks) => {
  return fs.writeJson(filePath, tasks);
};

const getAllTasks = async (status, page = 1, limit = 10) => {
  const tasks = await readTasks();
  
  let filteredTasks = tasks;
  if (status) {
    filteredTasks = tasks.filter(task => task.status === status);
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  return {
    total: filteredTasks.length,
    page,
    limit,
    tasks: paginatedTasks
  };
};

const getTaskById = async (id) => {
  const tasks = await readTasks();
  const task = tasks.find(task => task.id === id);
  if (!task) throw { status: 404, message: 'Task not found' };
  return task;
};

const createTask = async (data) => {
  const tasks = await readTasks();
  const newTask = { id: uuidv4(), ...data };
  tasks.push(newTask);
  await writeTasks(tasks);
  return newTask;
};

const updateTask = async (id, data) => {
  const tasks = await readTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) throw { status: 404, message: 'Task not found' };
  tasks[index] = { ...tasks[index], ...data };
  await writeTasks(tasks);
  return tasks[index];
};

const deleteTask = async (id) => {
  const tasks = await readTasks();
  const newTasks = tasks.filter(task => task.id !== id);
  if (tasks.length === newTasks.length) throw { status: 404, message: 'Task not found' };
  await writeTasks(newTasks);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
