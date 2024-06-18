var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  var name = "Amy";
  var adr = "Mountain 21";
  // escape the address value
  //   var sql = "SELECT * FROM customer WHERE address = " + mysql.escape(adr);

  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // ? placeholder
  //   var sql = "SELECT * FROM customer WHERE address = ?";

  //   con.query(sql, [adr], function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // multiple placeholders
  var sql = "SELECT * FROM customer WHERE name = ? OR address = ?";
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
