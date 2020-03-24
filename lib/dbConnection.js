var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'shoumick1234',
	database:'corona_schema'
});


connection.connect(function(error){
	if(error) {
		console.log(error);
		 throw error;
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;