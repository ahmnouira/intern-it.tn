// import mongoose
var mongoose = require('mongoose');

const DirectorSchema = mongoose.model('Director', new mongoose.Schema({

  email: {
    type: String, required: true, trim: true
  },

  password: {
    // trim: true accep
    type: String, required: true, trim: true
  },

  cin: {
    type: Number, required: true, trim: true
  }

}))
module.exports = DirectorSchema ;
