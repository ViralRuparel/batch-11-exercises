const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.redirect("/form-with-get");
});

app.get("/form-with-get", (req, res) => {
  return res.render("form-with-get");
});

app.get("/form-with-post", (req, res) => {
  return res.render("form-with-post");
});

app.get("/submit-form-with-get", (req, res) => {
  res.send(JSON.stringify(req.query));
});

app.post("/submit-form-with-post", (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;