const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;