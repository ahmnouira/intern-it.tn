var mongoose = require('mongoose');

const file = mongoose.model('file', new mongoose.Schema({

  title: { type: String },
  file: {type: String }

}));

module.exports = mongoose.model('file');
