const connection = require("../connect");
const IdSchema = require("../schemas/IdSchema");

const Id = connection.model("Id", IdSchema);

module.exports = Id;
