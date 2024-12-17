// models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "No description provided",
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
