const path = require("path");
const rootDir = require("./../utils/path");
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.AddContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.AddSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};

exports.Addpost = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.GetAllProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
