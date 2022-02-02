const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./server/routes/router");
const ejs = require("ejs");
const path = require("path");
const connectdb = require("./server/model/connection");
// const dotenv = require("dotenv");

// dotenv.config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", router);

app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

connectdb();


module.exports = app;