const express = require("express");
const config = require("./config");
const cors = require("cors");
const usersRoutes = require("../src/routes/usersRoutes");
const objectsRoutes = require("../src/routes/objectsRoutes");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.options("*", cors());

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/objects", objectsRoutes);

app.listen(config.PORT, (err) =>
  console.log(`Listening on ${config.HOST}:${config.PORT}/`)
);
