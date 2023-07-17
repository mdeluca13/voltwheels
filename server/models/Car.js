const { Schema, model } = require('mongoose');

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
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
});

const Car = model('Car', carSchema);

module.exports = Car;
