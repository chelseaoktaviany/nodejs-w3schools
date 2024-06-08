var fs = require("fs");

//replace the file with a new one:
fs.writeFile("mynewfile3.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Replace!");
});
