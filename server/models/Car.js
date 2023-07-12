const mongoose = require("mongoose");

const { Schema } = mongoose;

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
  trim: {
    type: String,
    required: true,
  },
  extra: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 1,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
