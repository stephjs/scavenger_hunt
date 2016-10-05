var orm = require('../config/orm.js');

var itemFunctions = {
	allItems: function (callback) {
		//use orm.js for ('table', callback)
		orm.allItems('scav', function (res) {
			callback(res);
		});
	},
	
	updateList: function (objColnewValues, condition, callback) {
		//using item found pair as an object {"glasses", false} means you haven't found your glasses
		orm.updateList('scav', objColnewValues, condition, function (res) {
			callback(res);
		});
	},

	addToList: function (specColumn, newValues, callback) {
		//use orm.js for ('table', column name, value inserted, callback)
		orm.addToList('scav', specColumn, newValues, function (res) {
			callback(res);
		});
	}
};

module.exports = itemFunctions;
