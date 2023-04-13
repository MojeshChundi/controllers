const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "no task exist";
    } else {
      res.send(`${data}<form  action="/" onsubmit=" document.getElementById('username').value=localStorage.getItem('username')"  method="POST">
      <input  type="text" id="message"  name="message">
      <input  type="hidden" id="username" name="username">
      <button type="submit">add</button>
    </form>`);
    }
  });
});

app.post("/", (req, res) => {
  // console.log(req.body.message);
  // console.log(req.body.username);

  let data = `${req.body.username}:${req.body.message} `;
  console.log(data);
  fs.writeFile("message.txt", data, { flag: "a" }, (err) => {
    if (err) {
      console.log(err);
      data = "no data exist";
    } else {
      res.redirect("/");
    }
  });
});

app.get("/login", (req, res) => {
  res.send(`<form  action="/" method="GET" onsubmit="localStorage.setItem('username', document.getElementById('message').value)"  >
	<input  type="text" id="message"  name="message">
	<input  type="hidden" id="username" name="username">
	<button type="submit">login</button>
</form>`);
});

app.listen(3000);
