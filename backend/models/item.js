const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
      name: {type: String, required: true},
      quantity: {type: Number},
      location: {type: String},
      url: {type: String},
      notes: {type: String},
      user_id: {type: String}
    }
  );
  
  // Virtual for book's URL
//   ItemSchema
//   .virtual('url')
//   .get(function () {
//     return '/catalog/book/' + this._id;
//   });
  
  //Export model
  module.exports = mongoose.model('Item', ItemSchema);