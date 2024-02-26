const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { users } = require("./data/data");
const connectDb = require("./config/db");
const colors = require('colors')

dotenv.config();

connectDb();

app.get("/", (req, res) => {
  res.send("Server Is Live");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`serverStarts at ${PORT}`.yellow.bold);
});
