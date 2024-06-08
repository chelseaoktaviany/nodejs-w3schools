var fs = require("fs");

//rename the file "mynewfile1.txt" into "myrenamedfile.txt"
fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File renamed!");
});
