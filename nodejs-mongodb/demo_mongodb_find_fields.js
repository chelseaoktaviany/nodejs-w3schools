var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //   dbo
  //     .collection("customers")
  //     .find({}, { projection: { _id: 0, name: 1, address: 1 } })
  //     .toArray(function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });

  // excluding "address" from the results
  //   dbo
  //     .collection("customers")
  //     .find({}, { projection: { address: 0 } })
  //     .toArray(function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });

  // excluding the "_id" field
  //   dbo
  //     .collection("customers")
  //     .find({}, { projection: { _id: 0, name: 1 } })
  //     .toArray(function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });

  // return all fields except the _id field
  dbo
    .collection("customers")
    .find({}, { projection: { _id: 0 } })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
