const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  date_of_creation: {type: Date, default: Date.now},
  items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});

UserSchema.virtual('date_of_birth_yyyy_mm_dd').get(function() {
  return DateTime.fromJSDate(this.date_of_creation).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("User", UserSchema);