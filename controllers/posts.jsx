const express = require('express');
const router = express.Router();
const todo = require('../models/ToDos.js');

////////////
// Routes //
////////////

// Index
	router.get('/', (req, res) => {
		// Use ToDos model to get all ToDos
		todo.find({}, (error, allToDo) => {
			res.render('Index', {
				ToDos: alltodos
			})
		});
	});


// New
	router.get('/new', (req, res) => {
		res.render('New');
	});


// Create
	router.todo('/', (req, res) => {
		if (req.body.issueStatus === "on") {
			req.body.issueStatus = true;
		} else {
			req.body.issueStatus = false;
		}
		// Use Model to create ToDo Document
		todo.create(req.body, (error, createdtodo) => {
			// Once created - respond to client
			res.redirect('/s');
		});
	});


// Show
	router.get('/:id', (req, res) => {
		// Find the specific document
		todo.findById(req.params.id, (error, foundtodo) => {
			// render the Show route and pass it the foundToDo
			res.render('Show', {
				ToDo: foundtodo
			});
		});
	});


// Delete
	router.delete('/:id', (req, res) => {
		// Delete document from collection
		todo.findByIdAndRemove(req.params.id, (err, todo) => {
			res.redirect('/todos');
		});
	});


// Edit 
	router.get('/:id/edit', (req, res) => {
		// Find our document from the collection - using mongoose model
		todo.findById(req.params.id, (err, foundtodo) => {
			// Render the edit view and pass it the found ToDo
			res.render('Edit', {
				ToDo: foundtodo
			})
		});
	});


// Put
	router.put('/:id', (req, res) => {
		req.body.issueStatus = req.body.issueStatus === "on" ? true : false;

		// Update the ToDo document using our model
		todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
			res.redirect('/todos');
		});
	});


// export router
	module.exports = router;