const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

userSchema.statics.findByUserId = function (id) {
  return this.findOne({ id }, { _id: 0 });
};

userSchema.statics.findByUsername = function (username) {
  return this.findOne({ username }, { _id: 0 });
};

module.exports = userSchema;
