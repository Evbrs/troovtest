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
    unique: true,
  },
  objectAddAt: {
    type: Date,
    default: Date.now,
  },
});

objectsSchema.statics.findByObjectId = function (id) {
  return this.findOne({ id }, { _id: 0 });
};

objectsSchema.statics.findByObjectDescription = function (objectDescription) {
  return this.findOne({ objectDescription }, { _id: 0 });
};

module.exports = objectsSchema;
