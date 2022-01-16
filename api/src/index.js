const express = require("express");

const config = require("./config");
const usersRoutes = require("../src/routes/usersRoutes");
const objectsRoutes = require("../src/routes/objectsRoutes");

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/objects", objectsRoutes);

app.listen(config.PORT, (err) =>
  console.log(`Listening on ${config.HOST}:${config.PORT}/`)
);
