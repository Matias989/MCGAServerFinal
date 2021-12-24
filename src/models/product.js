const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  category: {
    type: String,
    required: 'La categoria es requerida.',
    trim: true,
  }
});

module.exports = mongoose.model('product', productSchema);