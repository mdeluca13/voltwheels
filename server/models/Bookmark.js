const mongoose = require('mongoose');

const { Schema } = mongoose;

// bookmark model
const bookmarkSchema = new Schema({
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

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;