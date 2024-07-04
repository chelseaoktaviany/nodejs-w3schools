require("dotenv").config({ path: ".env" });

var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function (err, db) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
