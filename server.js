const express = require("express");
const postgres = require("postgres");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

const upload = require("./common/uploadMiddleware.js");
app.use(upload);
const pg = require("knex")({
  client: "pg",
  connection: process.env.pool,
  searchPath: ["knex", "public"],
});

const port = process.env.PORT;
app.listen(port);
app.get("/", (req, res) => {
  res.send("hello world1");
});
const multer = require("multer");
const formdata = multer().none();

app.use(formdata);
var usersroutes = require("./routes/usersroutes")();
app.use("/users", usersroutes);
