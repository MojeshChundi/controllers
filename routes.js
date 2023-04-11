const fs = require("fs");

const requesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  fs.readFile("message.txt", (err, data) => {
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>server</title><head>");
      res.write(`<head><h1>${data}</h1><head>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"></input><button>send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
  });

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};
module.exports = requesthandler;
