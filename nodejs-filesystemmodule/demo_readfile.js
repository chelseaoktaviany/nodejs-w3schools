var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    //open a file on the server and return its content:
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .on("listening", function () {
    console.log("The server is running");
  })
  .listen(80);
