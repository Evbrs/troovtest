const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdSchema = new Schema({
  name: String,
  value: Number,
});

IdSchema.statics.getLastId = function (name) {
  return this.findOne({ name });
};

module.exports = IdSchema;
