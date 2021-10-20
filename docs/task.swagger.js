export const getAllTasks = {
  security: {
    jwt: []
  },
  tags: ['Task'],
  description: 'This route allow to get all tasks',
  opeationId: 'getAllTasks',
  parameters: [
    {
      in: 'query',
      name: 'select',
      type: 'string',
      example: 'taskName',
      description: 'Select only fields you want.'
    },
    {
      in: 'query',
      name: 'limit',
      type: 'string',
      example: '5',
      description:
        'Limit the number of tasks from for example 20 task to 5 tasks.'
    },
    {
      in: 'query',
      name: 'sort',
      type: 'string',
      example: '1, taskName',
      description:
        'Sorting tasks according to specified field for example the taskName field, and the number before the field taskName indicates the order of items: descending (-1) or ascending (1)'
    },
    {
      in: 'query',
      name: 'page',
      type: 'string',
      example: '2',
      description:
        'When number of tasks is greater than 10 tasks, it divides into pages each page contain 10 tasks.'
    }
  ],
  responses: {
    200: {
      description: 'Get All Tasks',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              },
              tasks: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '616f7d427208deb911dec46a'
                    },
                    taskName: {
                      type: 'string',
                      example: 'Learn React'
                    },
                    completed: {
                      type: 'boolean',
                      example: false
                    },
                    __v: {
                      type: 'number',
                      example: 0
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'fail'
              },
              message: {
                type: 'string',
                example: 'No Tasks Found'
              }
            }
          }
        }
      }
    }
  }
};

export const getTask = {
  tags: ['Task'],
  description: "This route allow to get task using it's ID",
  opeationId: 'getTask',
  parameters: [
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Task ID'
    }
  ],
  responses: {
    200: {
      description: "Get task using it's ID",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              },
              task: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '616f7d427208deb911dec46a'
                  },
                  taskName: {
                    type: 'string',
                    example: 'Learn ReactJS'
                  },
                  completed: {
                    type: 'boolean',
                    example: false
                  },
                  __v: {
                    type: 'number',
                    example: 0
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'fail'
              },
              message: {
                type: 'string',
                example: 'No task with id: taskID'
              }
            }
          }
        }
      }
    }
  }
};

export const createTask = {
  tags: ['Task'],
  description: 'This route allow you to create new task',
  opeationId: 'createTask',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            taskName: {
              type: 'string',
              required: true
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Craete new task',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              },
              task: {
                type: 'object',
                properties: {
                  taskName: {
                    type: 'string',
                    example: 'Learn NestJS'
                  },
                  completed: {
                    type: 'boolean',
                    example: false
                  },
                  _id: {
                    type: 'string',
                    example: '616f7e1b7208deb911dec46c'
                  },
                  __v: {
                    type: 'number',
                    example: 0
                  }
                }
              }
            }
          }
        }
      }
    },
    400: {
      description: 'Error: 400',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'fail'
              },
              message: {
                type: 'string',
                example: 'All fields are required'
              }
            }
          }
        }
      }
    }
  }
};

export const updateTask = {
  tags: ['Task'],
  description: 'This route allow you to update task',
  opeationId: 'updateTask',
  parameters: [
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Task ID'
    }
  ],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            taskName: {
              type: 'string'
            },
            completed: {
              type: 'boolean'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Updated task',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              },
              task: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '616f7d427208deb911dec46a'
                  },
                  taskName: {
                    type: 'string',
                    example: 'Learn ReactJS'
                  },
                  completed: {
                    type: 'boolean',
                    example: false
                  },
                  __v: {
                    type: 'number',
                    example: 0
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'fail'
              },
              message: {
                type: 'string',
                example: 'No task with id: taskId'
              }
            }
          }
        }
      }
    }
  }
};

export const deleteTask = {
  tags: ['Task'],
  description: 'This route allow you to delete task',
  opeationId: 'deleteTask',
  parameters: [
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'Task ID'
    }
  ],
  responses: {
    200: {
      description: 'Delete task',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No task with id: taskId'
              }
            }
          }
        }
      }
    }
  }
};
