const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model('categories', categorySchema);
