var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectsRouter = require("./routes/projects");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
