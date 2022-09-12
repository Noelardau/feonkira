

var mysql  = require('mysql');


var connection = mysql.createConnection({
      host     : "localhosthttp://2360-102-68-195-114.ngrok.io",
      user     : "root",
      password : "",
      database : "mozika"
    });


connection.connect();
 
module.exports = connection