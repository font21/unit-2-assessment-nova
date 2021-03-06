//////////////////
// Dependencies //
//////////////////
const express = require('express');
const app = express ();

const mongoose = require ('mongoose');
const db = mongoose.connection;

const methodOverride  = require('method-override');

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;



////////////////////////
// Connect to MongoBD //
////////////////////////
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/toDoList';

mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });

// Error or success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});


////////////////
// Middleware //
////////////////
//use public folder for static assets
app.use(express.static('public'));

app.set('view engine', 'jsx');


// populates req.body with parsed info from forms
// if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

app.engine('jsx', require('express-react-views').createEngine());


//use method override -- allow POST, PUT and DELETE from a form
app.use(methodOverride('_method'));



///////////////////////////
// Controller for Routes //
///////////////////////////
const todosController = require('./controllers/todos.jsx');
app.use('/todos', todosController);

//////////////
// Listener //
//////////////
app.listen(PORT, () => console.log( 'Listening on port:', PORT));