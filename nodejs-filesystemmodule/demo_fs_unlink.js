var fs = require("fs");

//delete the file mynewfile2.txt:
fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
