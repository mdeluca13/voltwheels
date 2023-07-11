const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookmarkSchema = new Schema({
  
user: {
  type: String,
  required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const Order = mongoose.model('Bookmark', BookmarkSchema);

module.exports = Bookmark;
