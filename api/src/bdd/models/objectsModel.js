const connection = require("../connect");
const objectsSchema = require("../schemas/objectsSchema");

const Object = connection.model("Object", objectsSchema);

module.exports = Object;
