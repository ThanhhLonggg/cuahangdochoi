var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
   {
      name : String,
      category : String,
      quantity : Number,
      price : Number,
      image : String
   }
);
var ToyModel = mongoose.model('dochoi', ToySchema, 'toy');
module.exports = ToyModel;