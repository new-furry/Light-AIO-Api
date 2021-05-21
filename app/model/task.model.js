const Task = require('./task.schema');

// constructor
const TaskModel = function(task) {
	this.sample = task.sample;
};

// Create new release task
TaskModel.create = async (newTask) => {
	const task = new Task(newTask);
	const result = await task.save();
	return result;
};

// Get all tasks
TaskModel.getAll = result => {
	const tasks = Task.find().lean();
	return tasks;
};

//delete release by id
TaskModel.deleteOne = async (id) => {
	const result = Task.findOneAndDelete({_id: id}).lean();
	return result;
};

module.exports = TaskModel;
