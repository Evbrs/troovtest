const connection = require("../connect");
const objectsSchema = require("../schemas/objectsSchema");

const Item = connection.model("object", objectsSchema);

module.exports = Item;
