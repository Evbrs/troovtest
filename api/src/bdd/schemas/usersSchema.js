const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.statics.findByUserId = function (id) {
  return this.findOne({ id });
};

usersSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

module.exports = usersSchema;
