import http from "node:http";
import formidable, { errors as formidableErrors } from "formidable";

const server = http.createServer(async (req, res) => {
  // parse the upload file
  if (req.url == "/fileupload" && req.method.toLowerCase() === "post") {
    const form = formidable({});
    let fields;
    let files;

    try {
      [fields, files] = await form.parse(req);
    } catch (err) {
      // example to check for a very specific error
      if (err.code === formidableErrors.maxFieldsExceeded) {
        // code
      }
      console.error(err);
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      res.end(String(err));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ fields, files }, null, 2));
    return;
  }

  // show a file upload form
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(`
    <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="fileupload"><br/>
        <input type="submit" />
    </form>
    `);
});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
