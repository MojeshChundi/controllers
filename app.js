const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const adminRoutes = require("./routes/Admin");
const shopRoutes = require("./routes/Shop");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
