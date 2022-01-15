const express = require("express");

const config = require("./src/config");

const app = express();

app.use(express.json());

app.listen(config.PORT, (err) =>
  console.log(`Listening on ${config.HOST}:${config.PORT}/`)
);
