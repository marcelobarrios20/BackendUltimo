const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Ejemplo: 'perro', 'gato'
  age: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Relación con un usuario
});

module.exports = mongoose.model('Pet', petSchema);
