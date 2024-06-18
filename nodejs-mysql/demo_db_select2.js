var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "SELECT name, address FROM customer",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
