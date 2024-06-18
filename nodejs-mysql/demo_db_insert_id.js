var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  var sql =
    "INSERT INTO customer (name, address) VALUES ('Michelle', 'Blue village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, id: " + result.insertId);
  });
});
