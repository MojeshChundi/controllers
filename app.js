const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("welcome to node server");
  }
  if (url === "/home") {
    res.write("welcome to home");
  }
  if (url === "/about") {
    res.write("welcome to about page");
  }
  if (url === "/node") {
    res.write("welcome to my node js project");
  }
  res.end();
});

server.listen(3000);
