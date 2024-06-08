var http = require("http");

//create a server object
http
  .createServer(function (req, res) {
    res.write("Hello World"); //write a response to the server
    res.end(); // end the response
  })
  .on("listening", function () {
    console.log("The server is running");
  })
  .listen(80); //the server object listens on port 8080
