//need mysql for storing items in table
var mysql = require('mysql');
var connection;

//Jaws DB connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
//local host connection
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'vanilla.123',
		database: 'scavhunt'
	});
}

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;