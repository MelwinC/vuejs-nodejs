var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// view engine setup not use
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(logger("dev"));
//parse requests content-type application-json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// database
const db = require("./models");
const Role = db.role;

// will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }");
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CDA application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/chaussette.routes")(app);

// la fonction initials créé 3 enregistrements dans table role de la BDD
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "moderator",
  });
  Role.create({
    id: 3,
    name: "admin",
  });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json({ message: err.message, error: err });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message, error: err });
  // res.render("error");
});

module.exports = app;
