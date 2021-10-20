import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: ['true', 'must provide a name'],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
