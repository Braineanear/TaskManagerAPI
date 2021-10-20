import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFeatures';
import { Task } from '../models/index';

export const getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await APIFeatures(req, Task);

  if (tasks.length === 0) {
    return next(new AppError('No Tasks Found', 404));
  }

  return res.status(200).json({
    status: 'success',
    tasks
  });
});

export const createTask = catchAsync(async (req, res, next) => {
  const { taskName } = req.body;

  if (!taskName) {
    return next(new AppError('All fields are required', 400));
  }

  const task = await Task.create(req.body);

  return res.status(201).json({
    status: 'success',
    task
  });
});

export const getTask = catchAsync(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return next(new AppError(`No task with id: ${taskId}`, 404));
  }

  return res.status(200).json({
    status: 'success',
    task
  });
});

export const updateTask = catchAsync(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    return next(new AppError(`No task with id: ${taskId}`, 404));
  }

  return res.status(200).json({
    status: 'success',
    task
  });
});

export const deleteTask = catchAsync(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskId });

  if (!task) {
    return next(new AppError(`No task with id: ${taskId}`, 404));
  }

  return res.status(200).json({
    status: 'success'
  });
});
