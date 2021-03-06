const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbs: {
    type: Number,
  },
});

module.exports = {
  contentSchema: mongoose.model('contents', contentSchema),
};
