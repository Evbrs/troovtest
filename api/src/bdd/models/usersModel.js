const connection = require("../connect");
const userSchema = require("../schemas/usersSchema");

const User = connection.model("User", userSchema);

module.exports = User;
