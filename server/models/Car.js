const { Schema, model } = require('mongoose');

// car model
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
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
  },
  trim: {
    type: String,
  },
  extra: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
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
