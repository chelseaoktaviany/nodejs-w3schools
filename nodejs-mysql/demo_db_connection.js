require("dotenv").config({ path: ".env" });

var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // query the database
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Result: " + result);
  //   });
});
