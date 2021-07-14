const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const routes = require("./api/routes");
const { sequelize } = require("./api/models");

sequelize.sync();

//const routes = require('routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.use("/", express.static(path.join(__dirname, "build ")));
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});
routes.init(app); 
const PORT = process.env.PORT || 5000;

app.listen(PORT);

//module.exports = app;
