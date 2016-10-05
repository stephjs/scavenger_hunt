//orm (object relational mapping) is where the magic happpens

//import connection from connection.js
var connection = require('../config/connection.js');

//question mark stuff for query
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

//formatting for object key value pair so that it goes from
//{item: "rainbow"} to item = "rainbow"
//this will be fed into the sql query
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
}

//orm variable holds the functions
var orm = {
	allItems: function (theTable, callback) {
		//select all data from the table
		var sqlQuery = 'SELECT * FROM ' + theTable + ';';
		connection.query(sqlQuery, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},
		
		//objColnewValues is an object of column and value changes ex: {item: "world peace", found: false}
	updateList: function (theTable, objColnewValues, condition, callback) {
		var sqlQuery = 'UPDATE ' + theTable + ' SET ' + objToSql(objColnewValues) + ' WHERE '  + condition;
		connection.query(sqlQuery, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

//still working on a function to let users edit the name of a list item
	// changeList: function (theTable, objColnewValues, objCololdValues, callback) {
	// 	var sqlQuery = 'UPDATE ' + theTable + ' SET ' + objToSql(objColnewValues) + ' WHERE '  + objToSql(objCololdValues);
	// 	connection.query(sqlQuery, function (err, result) {
	// 		if (err) throw err;
	// 		callback(result);
	// 	});
	// },


	addToList: function (theTable, specColumn, newValues, callback) {
		var sqlQuery = 'INSERT INTO ' + theTable + ' (' + specColumn.toString() + ') ' + 'VALUES (' + printQuestionMarks(newValues.length)+ ') ';
		connection.query(sqlQuery, newValues, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;