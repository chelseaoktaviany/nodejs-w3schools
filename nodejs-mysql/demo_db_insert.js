require("dotenv").config({ path: ".env" });

var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO customer (name, address) VALUES ('Company Inc', 'Highway 37')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
