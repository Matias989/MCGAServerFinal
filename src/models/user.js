const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'El email es requerido.',
    trim: true,
  },
  password: {
    type: String,
    required: 'La password es requerida.',
    trim: true,
  }
});

module.exports = mongoose.model('user', userSchema);