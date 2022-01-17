const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  objectDescription: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  objectAddAt: {
    type: Date,
    default: Date.now,
  },
});

objectsSchema.statics.findByItemId = function (id) {
  return this.findOne({ id });
};

objectsSchema.statics.findByItemDescription = function (objectDescription) {
  return this.findOne({ objectDescription });
};

module.exports = objectsSchema;
