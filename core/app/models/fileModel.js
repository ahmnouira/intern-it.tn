var mongoose = require('mongoose');
var path = require('path');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const FileSchema = new Schema({
  user_id: {type:ObjectId},
  user_name: {type:String},
  filename: {type: String },
  full_name: {type: String},
  name: {type: String},
  timestamp: {type:Date, default: Date.now}
})

// the id of the image is the filename
FileSchema.virtual('id').get(function(){
  return this.filename
});

const file = mongoose.model('file', FileSchema);

module.exports = file;
