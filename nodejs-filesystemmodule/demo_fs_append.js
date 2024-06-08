var fs = require("fs");

//create a file name mynewfile1.txt
fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
