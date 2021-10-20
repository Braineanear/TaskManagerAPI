import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from './task.swagger';

const docs = {
  openapi: '3.0.3',
  info: {
    title: 'Task Manager API',
    description: 'An API for managin tasks built using NodeJS & MongoDB',
    version: '1.0.0',
    contact: {
      name: 'Mahmoud Yasser',
      email: 'mle.mahmoud.yasser@gmail.com',
      url: 'https://github.com/Braineanear'
    }
  },
  servers: [
    {
      url: 'https://task-manager--api.herokuapp.com/',
      description: 'Production Server'
    },
    {
      url: 'http://localhost:8000/',
      description: 'Development Server'
    }
  ],
  paths: {
    '/tasks': {
      get: getAllTasks,
      post: createTask
    },
    '/tasks/{id}': {
      get: getTask,
      patch: updateTask,
      delete: deleteTask
    }
  }
};

export default docs;
