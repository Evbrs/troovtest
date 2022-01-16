const mongoose = require("mongoose");
const config = require("../config");

const dbOptions = {
  dbName: config.DB_NAME,
};

if (config.DB_USER) {
  dbOptions.user = config.DB_USER;
}

if (config.DB_PASS) {
  dbOptions.pass = config.DB_PASS;
}

const connection = mongoose.createConnection(config.DB_URI, dbOptions);

module.exports = connection;
