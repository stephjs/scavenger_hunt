//need mysql for storing items in table
var mysql = require('mysql');

//creating connection
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'vanilla.123',
	database: 'scavhunt'
});

//checking whether we can connect to mysql and the scavhunt database
connection.connect(function (err) {
	if (err) {
		console.error('There was a connection error: ' + err.stack);
		return;
	}
	console.log('Connected as ID: ' + connection.threadId);
});

//export connection to be used in orm.js
module.exports = connection;