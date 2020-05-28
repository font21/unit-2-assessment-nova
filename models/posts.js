const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
    ToDo: { type: String, required: true },
}, { timestamps: true });

//  Create Model from our Schema
const todo = mongoose.model('todo', todoSchema);

// Export ToDo Model
module.exports = todo;