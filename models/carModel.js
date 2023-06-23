var mongoose = require('mongoose');
var CarSchema = mongoose.Schema(
   {
      name : String,
      category : String,
      price : Number,
      image : String
   }
);
var ToyModel = mongoose.model('xehoi', CarSchema, 'car');
module.exports = ToyModel;