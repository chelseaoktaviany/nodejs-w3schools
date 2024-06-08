var http = require("http");
// var uc = require("upper-case"); // deprecated, use str.toUpperCase()
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // use our upper case module to upper case a string
    // res.write(uc.upperCase("Hello World!"));
    res.write("Hello World!");
    res.end();
  })
  .listen(8080, () => {
    console.log("Listening on port 8080...");
  });
