const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true},
  client: { type: String, required: true},
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Product', productSchema);