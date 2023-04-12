const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Running the middle ware!");
  next();
});
app.use((req, res, next) => {
  console.log("Running another middle ware!");
  res.send({ key1: "value" });
});

app.listen(3000);
