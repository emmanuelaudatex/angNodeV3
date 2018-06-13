var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Part = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'parts'
});

module.exports = mongoose.model('Part', Part);