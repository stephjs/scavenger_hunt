//this is an express app
var express = require('express');
var router = express.Router();

//this is where the functions for creating/updating/deleting the items around are stored
var itemFunctions = require('../models/burger.js');

//redirects from localhost:3000 to the scavlist page
router.get('/', function (req, res) {
	res.redirect('/scavlist');
});

//saying whats on the scavlist page
router.get('/scavlist', function (req, res) {
	//initially show all items in the scavenger hunt list
	itemFunctions.allItems(function (scavdata) {
		var allitems = {scav: scavdata};
		console.log(allitems);
		res.render('index', allitems);
	});
});

//post for added items
router.post('/scavlist/add', function (req, res) {
	itemFunctions.addToList(['item', 'found'], [req.body.item, req.body.found], function () {
		res.redirect('/scavlist');
	});
});

//put for updating whether or not an item has been found
router.put('/scavlist/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	itemFunctions.updateList({ found: req.body.found }, condition, function () {
		res.redirect('/scavlist');
	});
});

//exporting router for server.js routes
module.exports = router;
