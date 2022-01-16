const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  ObjectDescription: {
    type: String,
    required: true,
  },
  Place: {
    type: String,
    required: true,
    unique: true,
  },
  objectAddAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.statics.findByObjectId = function (id) {
  return this.findOne({ id }, { _id: 0 });
};

userSchema.statics.findByObjectDescription = function (username) {
  return this.findOne({ username }, { _id: 0 });
};

module.exports = userSchema;
