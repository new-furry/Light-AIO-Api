const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    sample: String,
});

module.exports = mongoose.model("Task", TaskSchema);
