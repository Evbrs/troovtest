const connection = require("../connect");
const userSchema = require("../schemas/userSchema");

const User = connection.model("User", userSchema);

module.exports = User;
