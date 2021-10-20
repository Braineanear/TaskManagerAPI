import express from 'express';

import { taskController } from '../controllers/index';

const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } =
  taskController;

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;
