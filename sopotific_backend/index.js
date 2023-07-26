// npm init : package.json -- This is a node project.
// npm i express : expressJs package install. --project came to know that we are using express
// We finally use express

const express = require("express");
const app = express();
const port = 8000;

// API : GET type : / : return text "Hello World"
app.get("/", (req, res) => {
  //  req contains all data for the request
  // res contains all data for the response
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});